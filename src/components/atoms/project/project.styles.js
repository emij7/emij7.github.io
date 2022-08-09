import styled from "styled-components";

export const StyledProject = styled.div`
  overflow: hidden;
  position: ${(props) => (props.active ? "absolute" : "relative")};
  animation: ${(props) =>
    props.mount
      ? "slide-in-fwd-center 4s cubic-bezier(.25,.46,.45,.94) both"
      : "slide-out-fwd-center .7s cubic-bezier(.55,.085,.68,.53) both"};
  @keyframes slide-in-fwd-center {
    0% {
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }
`;