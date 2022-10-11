import React from "react";
import { StyledImage } from "./image.styles";

export const Image = ({ alt, size = "auto", src, secondary }) => {
  return <StyledImage alt={alt} src={src} size={size} secondary={secondary} />;
};
