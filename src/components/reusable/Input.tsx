import styled from "styled-components";
import { ChangeEventHandler } from "react";
import React from "react";
import { Input } from "./Common";
import { Container } from "./Layouts";

export type IProps = {
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  className?: string;
  type?: string;
  value?: string | number;
};
// eslint-disable-next-line react/display-name
const InputField = React.forwardRef(
  (
    {
      defaultValue,
      label = "",
      placeholder = "",
      type = "text",
      onChange,
      name,
      className,
      value,
    }: IProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <StyledContainer className={className}>
        {label && <StyledTitle>{label}</StyledTitle>}
        <Wrapper>
          <Input
            ref={ref}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </Wrapper>
      </StyledContainer>
    );
  }
);

export default InputField;

const StyledContainer = styled(Container)`
  flex-direction: column;
  width: 26.25em;
  align-items: flex-start;
`;
const Wrapper = styled(Container)`
  gap: 0.375em;
  padding: 0 0.625em;
  border: ${(props) => props.theme.border.main};
  border-radius: 0.5em;
  width: 100%;
  min-height: 2.1875em;
  align-items: flex-start;
  ${Input} {
    width: 100%;
    color: black;
  }
`;

const StyledTitle = styled.h5`
  color: grey;
  margin: 0;
  padding: 0.75em 0;
`;
