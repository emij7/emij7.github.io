import styled from "styled-components";

export const StyledProject = styled.a`
  border: 2px ${({ theme }) => theme.color.secondary} solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 0.4fr 0fr 1fr;
  height: 18rem;
  align-items: start;
  max-width: 80%;
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
  @media (${({ theme }) => theme.device.desktop}) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
`;
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem;
  margin: 0.5rem 0 0 0.5rem;
  grid-auto-rows: minmax(10px, 20px);
  justify-items: start;
  @media (${({ theme }) => theme.device.desktop}) {
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
export const StyledGridItem = styled.p`
  color: ${({ theme }) => theme.color.tertiary};
  &:before {
    content: "•";
    padding-right: 5px;
  }
  white-space: nowrap;
`;
// @media ((max-width: 767px)) {
//   display: none;
// } ;
