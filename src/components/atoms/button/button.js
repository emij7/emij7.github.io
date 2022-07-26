import { StyledButton } from "./button.styles";
import React from "react";

export const Button = ({ children, active, onClick, margin = "0 0.3rem" }) => {
  return (
    <StyledButton onClick={onClick} active={active} margin={margin}>
      {children}
    </StyledButton>
  );
};
