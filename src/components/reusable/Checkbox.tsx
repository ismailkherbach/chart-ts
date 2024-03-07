import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export type ICheckboxProps = {
  checked?: boolean;
  className?: string;
  label?: string;
  onChange?: () => void;
};

const Checkbox = ({
  className,
  checked,
  label,
  onChange,
  ...props
}: PropsWithChildren<ICheckboxProps>) => (
  <CheckboxContainer className={className} onClick={onChange}>
    <HiddenCheckbox defaultChecked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <Label>{label}</Label>
  </CheckboxContainer>
);
export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin-top: 1.25em;
`;

const Icon = styled.svg`
  fill: none;
  stroke: green;
  stroke-width: 0.125em;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0.0625em;
  margin: -0.0625em;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.0625em;
`;

const StyledCheckbox = styled.div<{ checked?: boolean }>`
  display: inline-block;
  width: 1em;
  height: 1em;
  background: ${(props) => props.theme.background.white};
  border-radius: 0.1875em;
  transition: all 150ms;
  border: ${(props) => props.theme.border.main};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0.1875em pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Label = styled.h5`
  padding-left: 0.625em;
  user-select: none;
  margin: 0;
`;
