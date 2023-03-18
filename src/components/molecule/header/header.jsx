import React from "react";
import { text } from "../../../text/text";
import { StyledAnimatedTitle } from "../../atoms/title/title.styles";
import { StyledDecoration, StyledHeader } from "./header.styles";

export const Header = ({ language }) => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledAnimatedTitle type="primary">
          Emiliano Juarez
        </StyledAnimatedTitle>
        <StyledDecoration />
        <StyledAnimatedTitle type="secondary">
          {text.title[language]}
        </StyledAnimatedTitle>
      </StyledHeader>
    </React.Fragment>
  );
};
