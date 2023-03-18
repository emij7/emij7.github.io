import styled from "styled-components";

export const StyledProject = styled.a`
  border: 2px ${({ theme }) => theme.color.secondary} solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 1fr 1fr;
  height: 18rem;
  align-items: start;
  max-width: 90%;
  padding: 1rem;
  grid-gap: 0.5rem;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover {
    transform: scale(1.05);
    border: 3px ${({ theme }) => theme.color.primary} solid;
  }
  &:hover h1 {
    color: ${({ theme }) => theme.color.tertiary};
  }
`;
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 0.3rem;
  grid-auto-rows: minmax(10px, 20px);
  justify-items: start;
`;
export const StyledGridItem = styled.p`
  color: ${({ theme }) => theme.color.tertiary};
  &:before {
    content: "•";
    padding-right: 5px;
  }
`;
// @media ((max-width: 767px)) {
//   display: none;
// } ;
