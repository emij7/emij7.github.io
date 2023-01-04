import styled from "styled-components";

export const StyledResume = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 3rem 5rem;
  margin: auto;
  width: 80%;

  @media (${({ theme }) => theme.device.tablet}) {
    flex-direction: column;
    padding: 0;
  } ;
`;
export const StyledDescription = styled.p`
  font-weight: 700;
  text-align: center;
  padding: 0 2rem;
  @media (${({ theme }) => theme.device.tablet}) {
    padding: 2rem 0;
  } ;
`;
