import styled from "styled-components";

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 460px));
  grid-gap: 1rem;
  position: relative;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  justify-items: center;
  @media (${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  }
`;
