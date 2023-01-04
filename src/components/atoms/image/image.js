import React from "react";
import { StyledImage } from "./image.styles";

export const Image = ({
  type,
  alt,
  size = "auto",
  src,
  secondary,
  resumeImage,
}) => {
  return (
    <StyledImage
      type={type}
      alt={alt}
      src={src}
      size={size}
      secondary={secondary}
      resumeImage={resumeImage}
    />
  );
};
