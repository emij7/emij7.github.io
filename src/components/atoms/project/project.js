import React from "react";
import { StyledParagraph } from "../../molecule/header/header.styles";
import { Content } from "../content/content";
import { Image } from "../image/image";
import { StyledTitle } from "../title/title.styles";
import { StyledGrid, StyledGridItem, StyledProject } from "./project.styles";

export const Project = ({
  active,
  title,
  description,
  image,
  mount,
  link,
  tecnologies,
}) => {
  return (
    <StyledProject active={active} mount={mount}>
      <Content>
        <StyledTitle type="primary"> {title}</StyledTitle>
        <StyledParagraph> {description}</StyledParagraph>
        <StyledGrid>
          {tecnologies.map((tecnologie, index) => {
            return <StyledGridItem key={index}>{tecnologie}</StyledGridItem>;
          })}
        </StyledGrid>
      </Content>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={image} alt={description} secondary />
      </a>
    </StyledProject>
  );
};
