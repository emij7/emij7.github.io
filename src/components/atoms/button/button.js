import { StyledButton } from "./button.styles";
import React from "react";

export const Button = ({ children, disabled, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
