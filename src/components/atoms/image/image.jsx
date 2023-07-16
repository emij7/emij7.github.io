import React from "react";
import { StyledImage } from "./image.styles";

export const Image = ({
  type,
  alt,
  size = "auto",
  src,
  secondary,
  resumeImage,
  height,
  width,
}) => {
  return (
    <StyledImage
      type={type}
      alt={alt}
      src={src}
      size={size}
      width={width}
      height={height}
      secondary={secondary}
      resumeImage={resumeImage}
    />
  );
};
