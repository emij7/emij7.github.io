import React from "react";
import { text } from "../../../text/text";
import { Image } from "../../atoms/image/image";
import { StyledDescription, StyledResume } from "./resume.styles";
import personalImage from "../../../utils/personalImage.jpg";

export const Resume = ({ children, language }) => {
  return (
    <StyledResume>
      <Image
        alt={"Personal Image"}
        size={"25"}
        src={personalImage}
        resumeImage
      />
      <StyledDescription>{text.description[language]}</StyledDescription>
    </StyledResume>
  );
};
