import React from "react";
import { Github } from "../../icons/github/github";
import { Gmail } from "../../icons/gmail/gmail";
import { Linkedin } from "../../icons/linkedin/linkedin";
import {
  FooterDecoration,
  StyledAnimatedFooter,
  StyledFooter,
  StyledFooterContainer,
  StyledIconContainer,
} from "./footer.styles";
import { text } from "../../../text/text";

export const Footer = ({ isIntersecting, language }) => {
  return (
    <StyledFooter isIntersecting={isIntersecting}>
      {isIntersecting ? (
        <StyledIconContainer>
          <Gmail />
          <Github />
          <Linkedin />
        </StyledIconContainer>
      ) : (
        <>
          <StyledFooterContainer>
            <StyledAnimatedFooter type="primary" isIntersecting>
              Emiliano Juarez
            </StyledAnimatedFooter>
            <FooterDecoration />
            <StyledAnimatedFooter type="secondary" isIntersecting>
              {text.title[language]}
            </StyledAnimatedFooter>
          </StyledFooterContainer>
          <StyledIconContainer>
            <Gmail />
            <Github />
            <Linkedin />
          </StyledIconContainer>
        </>
      )}
    </StyledFooter>
  );
};
