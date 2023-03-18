import React from "react";
import { StyledTitle } from "./title.styles";

export const Content = ({ children, type, fontSize }) => {
  return (
    <StyledTitle type={type} fontSize={fontSize}>
      {children}
    </StyledTitle>
  );
};
