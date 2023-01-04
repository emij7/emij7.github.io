import React from "react";
import { text } from "../../../text/text";
import { StyledTitle } from "../../atoms/title/title.styles";
import { StyledDecoration, StyledHeader } from "./header.styles";

export const Header = ({ language }) => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledTitle type="primary">Emiliano Juarez</StyledTitle>
        <StyledDecoration />
        <StyledTitle type="secondary">{text.title[language]}</StyledTitle>
      </StyledHeader>
    </React.Fragment>
  );
};
