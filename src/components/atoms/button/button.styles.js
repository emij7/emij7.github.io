import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.color.gray : props.theme.color.tertiary};
  border-radius: 30%;
  box-shadow: ${(props) =>
    !props.active ? `2px 3px 0px ${props.theme.color.secondary}` : "none"};
  height: 2rem;
  margin: ${(props) => props.margin};
  width: 3rem;
  transform: ${(props) => (props.active ? "translateY(3px)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
