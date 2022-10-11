import React from "react";
import { StyledContent } from "./content.styles";

export const Content = ({ children, height = "auto", width = "auto" }) => {
  return (
    <StyledContent height={height} width={width}>
      {children}
    </StyledContent>
  );
};
