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
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  height: ${(props) => props.height || "inherit"};
`;
