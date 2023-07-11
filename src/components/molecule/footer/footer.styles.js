import styled from "styled-components";

export const StyledFooter = styled.div`
  border-top: 5px
    ${({ theme, type }) =>
      type === "primary" ? theme.color.text : theme.color.secondary}
    solid;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.isIntersecting ? "flex-end" : "space-between"};
  padding: 0.3rem 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.appBackground};
`;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin: 0 1rem;
  @media ((max-width: 600px)) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const FooterDecoration = styled.div`
  border: 2px solid ${({ theme }) => theme.color.text};
  width: 50%;
`;

export const StyledFooterContainer = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media ((max-width: 600px)) {
    display: none;
  }
`;

export const StyledAnimatedFooter = styled.h3`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary};
  text-align: left;
  white-space: nowrap;
  -webkit-animation: focus-in-contract 1s cubic-bezier(0.35, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-contract 1s cubic-bezier(0.35, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes focus-in-contract {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      opacity: 1;
    }
  }
  @keyframes focus-in-contract {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      opacity: 1;
    }
  }
`;
