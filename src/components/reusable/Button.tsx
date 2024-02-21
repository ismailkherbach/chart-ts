import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { Row, clickBehaviorCss, flexCss } from './Layouts';


type IProps = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;
};

function Button({
    onClick,
    className,
    children,
}: PropsWithChildren<IProps>) {
    return (
        <ButtonContainer onClick={onClick} className={className}>
            <StyledButton>{children}</StyledButton>
        </ButtonContainer>
    );
}

export default Button;

const ButtonContainer = styled(Row)`
  ${clickBehaviorCss};
`;

export const StyledButton = styled.button`
  ${flexCss};
  ${clickBehaviorCss};
  padding: 0.25em;
  border: none;
  background-color: inherit;
  color: inherit;
  width: auto;
`;
