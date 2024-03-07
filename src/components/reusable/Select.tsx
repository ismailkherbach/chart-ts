import Select from "react-select";
import styled from "styled-components";
import { Container } from "./Layouts";

export type IProps = {
  label?: string;
  options?: TOption[];
  selected?: TOption;
  className?: string;
  onChange?: (newValue: unknown) => void;
};

export type TOption = {
  value: string | number;
  label: string | number;
};

const SelectInput = ({
  label,
  onChange,
  options,
  selected,
  className,
}: IProps) => {
  const customStyles = {
    control: (provided: Record<string, unknown>) => ({
      ...provided,
      borderColor: "white",
      height: "2em",
      width: "26.1em",
      borderRadius: "0.5EM",
      "&:hover": {
        borderColor: "white",
      },
    }),
  };

  return (
    <StyledContainer className={className}>
      {label && <StyledTitle>{label}</StyledTitle>}
      <Wrapper>
        <SelectStyled
          defaultValue={selected}
          isLoading={false}
          isSearchable
          options={options}
          onChange={onChange}
          styles={customStyles}
        />
      </Wrapper>
    </StyledContainer>
  );
};

export default SelectInput;

const StyledContainer = styled(Container)`
  flex-direction: column;
  width: 26.25em;
  align-items: flex-start;
`;
const Wrapper = styled(Container)`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.375em;
  border: ${(props) => props.theme.border.main};
  border-radius: 0.5em;
  min-height: 2.1875em;
  color: black;
`;

const SelectStyled = styled(Select)`
  width: 26.25em;
`;

const StyledTitle = styled.h5`
  color: grey;
  padding: 0.75em 0;
  margin: 0;
`;
