import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary};
  text-align: center;
`;
