import React from "react";
import { text } from "../../../text/text";
import { Image } from "../../atoms/image/image";
import { StyledDescription, StyledResume } from "./resume.styles";
import personalImage from "../../../utils/personalImage.jpg";
import { Content } from "../../atoms/content/content";

export const Resume = ({ children, language }) => {
  return (
    <StyledResume>
      <Image
        alt={"Personal Image"}
        size={"25"}
        src={personalImage}
        resumeImage
      />
      <Content>
        <StyledDescription>{text.description[language]}</StyledDescription>
        <Content margin="20px 0">
          <StyledDescription>{text.newSite[language]}</StyledDescription>
        </Content>
      </Content>
    </StyledResume>
  );
};
