import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.primary.normal};
  border-radius: 50%;
  border: 0.5rem outset ${(props) => props.theme.color.primary.normal};
  height: 3rem;
  padding: 0.5rem;
  width: 3rem;
`;
