import styled from "styled-components";

export const StyledLogo = styled.svg`
  color: ${({ theme }) => theme.color.text};
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  transition: transform 0.2s ease-in-out;
`;
