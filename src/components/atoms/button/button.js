import { StyledButton } from "./button.styles";
import React from "react";

export const Button = ({
  children,
  active,
  onClick,
  margin = "0 0.3rem",
  secondary,
  tertiary,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
      margin={margin}
      secondary={secondary}
      tertiary={tertiary}
    >
      {children}
    </StyledButton>
  );
};
