import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 3rem 0;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary};
  text-align: center;
`;
export const StyledDecoration = styled.div`
  @media (max-width: 650px) {
    border: 2px solid ${({ theme }) => theme.color.text};
    width: 50%;
    margin: 0.1rem;
  }
  @media (min-width: 650px) {
    border: 2px solid ${({ theme }) => theme.color.text};
    margin: 0 1rem;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 700;
  text-align: center;
  padding: 2rem;
`;
