import React from "react";
import { StyledParagraph } from "../../molecule/header/header.styles";
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
    <StyledProject
      active={active}
      mount={mount}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <StyledTitle type="primary" fontSize={"1.7rem"}>
        {title}
      </StyledTitle>
      <Image src={image} alt={description} secondary />
      <StyledParagraph height="5rem"> {description}</StyledParagraph>
      <StyledGrid>
        {tecnologies.map((tecnologie, index) => {
          return <StyledGridItem key={index}>{tecnologie}</StyledGridItem>;
        })}
      </StyledGrid>
    </StyledProject>
  );
};
