import React from "react";
import { StyledParagraph } from "../../molecule/header/header.styles";
import { Content } from "../content/content";
import { Image } from "../image/image";
import { StyledTitle } from "../title/title.styles";
import { StyledProject } from "./project.styles";

export const Project = ({ active, title, description, image, mount, link }) => {
  return (
    <StyledProject active={active} mount={mount}>
      <Content height="10rem">
        <StyledTitle type="primary"> {title}</StyledTitle>
        <StyledParagraph> {description}</StyledParagraph>
      </Content>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={image} alt={description} secondary />
      </a>
    </StyledProject>
  );
};
