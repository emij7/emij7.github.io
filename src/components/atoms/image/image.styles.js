import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  height: ${(props) => props.size};
  ${({ secondary }) => secondary && projectImg}
`;
const projectImg = css`
  width: 100%;
  padding: 0.5rem;
`;
