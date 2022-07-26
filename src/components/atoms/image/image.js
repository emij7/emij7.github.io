import React from "react";
import { StyledImage } from "./image.styles";

export const Image = ({ alt, size, src }) => {
  return <StyledImage alt={alt} src={src} size={size} />;
};
