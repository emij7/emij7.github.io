import React from "react";
import { text } from "../../../text/text";
import {
  StyledDecoration,
  StyledHeader,
  StyledParagraph,
  StyledTitle,
} from "./header.styles";

export const Header = ({ language }) => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledTitle type="primary">Emiliano Juarez</StyledTitle>
        <StyledDecoration />
        <StyledTitle type="secondary">{text.title[language]}</StyledTitle>
      </StyledHeader>
      <StyledParagraph>{text.description[language]}</StyledParagraph>
    </React.Fragment>
  );
};
