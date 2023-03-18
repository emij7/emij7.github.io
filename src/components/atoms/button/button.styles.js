import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  border: 2px solid
    ${(props) =>
      props.active
        ? props.theme.color.activeButton
        : props.theme.color.unactiveButton};
  border-radius: 30%;
  box-shadow: ${(props) =>
    !props.active
      ? `1px 2px 0px ${props.theme.color.secondary}`
      : `inset 3px 3px 8px 0px ${props.theme.color.black}`};
  height: 2rem;
  margin: ${(props) => props.margin};
  width: 3rem;
  transform: ${(props) => (props.active ? "translateY(2px)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
