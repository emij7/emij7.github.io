import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  border: 2px solid
    ${(props) =>
      props.active
        ? props.theme.color.activeButton
        : props.theme.color.unactiveButton};
  border-radius: 30%;
  box-shadow: ${(props) =>
    !props.active
      ? `1px 2px 0px ${props.theme.color.secondary}`
      : `inset 3px 3px 8px 0px ${props.theme.color.black}`};
  height: 2rem;
  margin: ${(props) => props.margin};
  width: 3rem;
  transform: ${(props) => (props.active ? "translateY(2px)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ secondary }) => secondary && rightArrow}
  ${({ tertiary }) => tertiary && leftArrow}
`;

const rightArrow = css`
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  box-shadow: none;
  width: 3 rem;
  margin: auto;
  clip-path: polygon(
    0% 20%,
    60% 20%,
    60% 0%,
    100% 50%,
    60% 100%,
    60% 80%,
    0% 80%
  );
`;

const leftArrow = css`
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  box-shadow: none;
  width: 3 rem;
  margin: auto;
  clip-path: polygon(
    40% 0%,
    40% 20%,
    100% 20%,
    100% 80%,
    40% 80%,
    40% 100%,
    0% 50%
  );
`;
