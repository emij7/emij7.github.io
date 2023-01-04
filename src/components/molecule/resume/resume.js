import React from "react";
import { text } from "../../../text/text";
import { Image } from "../../atoms/image/image";
import { StyledParagraph } from "../header/header.styles";
import { StyledResume } from "./resume.styles";
import personalImage from "../../../utils/personalImage.jpg";
import { Content } from "../../atoms/content/content";

export const Resume = ({ children, language }) => {
  return (
    <StyledResume>
      <Image
        alt={"Personal Image"}
        size={"30rem"}
        src={personalImage}
        resumeImage
      />
      <Content width="50%">
        <StyledParagraph>{text.description[language]}</StyledParagraph>
      </Content>
    </StyledResume>
  );
};
