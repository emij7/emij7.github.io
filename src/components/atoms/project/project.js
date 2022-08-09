import React from "react";
import { Image } from "../image/image";
import { StyledProject } from "./project.styles";

export const Project = ({ active, title, description, image, mount }) => {
  return (
    <StyledProject active={active} mount={mount}>
      <p> {title}</p>
      <p> {description}</p>
      <Image src={image} alt={description} />
    </StyledProject>
  );
};
