import React from "react";
import { Github } from "../../icons/github/github";
import { Gmail } from "../../icons/gmail/gmail";
import { Linkedin } from "../../icons/linkedin/linkedin";
import { StyledFooter } from "./footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
        <Gmail/>
        <Github/>
        <Linkedin/>
    </StyledFooter>
  );
};
