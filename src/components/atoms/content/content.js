import React from "react";
import { StyledContent } from "./content.styles";

export const Content = ({
  children,
  height = "auto",
  width = "auto",
  margin = "0 0",
}) => {
  return (
    <StyledContent height={height} width={width} margin={margin}>
      {children}
    </StyledContent>
  );
};
