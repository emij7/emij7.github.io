import React, { useEffect, useState } from "react";
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
import { Content } from "../../atoms/content/content";

export const Footer = ({ isIntersecting, language }) => {
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!isIntersecting && firstTime) {
      setFirstTime(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <StyledFooter isIntersecting={isIntersecting}>
      {!firstTime ? (
        <StyledFooterContainer>
          <StyledAnimatedFooter
            type="primary"
            isIntersecting={isIntersecting}
            firstTime={firstTime}
          >
            Emiliano Juarez
          </StyledAnimatedFooter>
          <FooterDecoration
            isIntersecting={isIntersecting}
            firstTime={firstTime}
          />
          <StyledAnimatedFooter
            type="secondary"
            isIntersecting={isIntersecting}
            firstTime={firstTime}
          >
            {text.title[language]}
          </StyledAnimatedFooter>
        </StyledFooterContainer>
      ) : (
        <Content as="div"></Content>
      )}
      <StyledIconContainer>
        <Gmail />
        <Github />
        <Linkedin />
      </StyledIconContainer>
    </StyledFooter>
  );
};
