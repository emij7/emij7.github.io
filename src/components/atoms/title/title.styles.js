import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary};
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
  grid-column: 1/3;
`;

export const StyledAnimatedTitle = styled.h1`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary};
  text-align: center;
  white-space: nowrap;
  -webkit-animation: focus-in-contract 4s cubic-bezier(0.35, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-contract 4s cubic-bezier(0.35, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
