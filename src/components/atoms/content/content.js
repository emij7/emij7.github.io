import React from "react";
import { StyledContent } from "./content.styles";

export const Content = ({
  children,
  height = "auto",
  width = "auto",
  margin = "0 0",
  minHeight,
  display,
  alignItems,
}) => {
  return (
    <StyledContent
      height={height}
      width={width}
      margin={margin}
      minHeight={minHeight}
      display={display}
      alignItems={alignItems}
    >
      {children}
    </StyledContent>
  );
};
