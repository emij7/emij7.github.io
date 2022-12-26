import React from "react";
import { StyledTitle } from "./title.styles";

export const Content = ({ children, type }) => {
  return <StyledTitle type={type}>{children}</StyledTitle>;
};
