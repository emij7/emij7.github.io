import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  height: ${(props) => props.size + "rem"};
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
  @media (${({ theme }) => theme.device.tablet}) {
    height: ${(props) => props.size / 2 + "rem"};
  }
  @media (${({ theme }) => theme.device.desktop}) {
    height: ${(props) => props.size / 1.5 + "rem"};
  }
`;
