import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  height: ${(props) => props.size};
  ${({ secondary }) => secondary && projectImg}
  ${({ resumeImage }) => resumeImage && personalImage}
`;
const projectImg = css`
  width: 100%;
  padding: 0.5rem;
`;
const personalImage = css`
  filter: ${({ type, theme }) =>
    type === "primary" ? theme.filter : theme.filter};
  border-radius: 20%;
`;
