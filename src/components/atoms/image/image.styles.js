import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  height: ${(props) => props.size};
  ${({ secondary }) => secondary && projectImg}
`;
const projectImg = css`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  padding: 0.5rem;
`;
