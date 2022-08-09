import React, { useState } from "react";
import { StyledProjects } from "./projects.styles";
import { text } from "../../../text/text";
import { Project } from "../../atoms/project/project";
import { Button } from "../../atoms/button/button";

export const Projects = ({ language }) => {
  const [focused, setFocused] = useState(1);
  const [mount, setMount] = useState(true);
  const projectQuantity = text.projects.length;
  const plusFocused = () => {
    setMount(false);
    setTimeout(() => {
      setMount(true);
      if (focused < projectQuantity) {
        setFocused(focused + 1);
      } else {
        setFocused(1);
      }
    }, 500);
  };
  const minusFocused = () => {
    setMount(false);
    setTimeout(() => {
      setMount(true);
      if (focused > 1) {
        setFocused(focused - 1);
      } else {
        setFocused(projectQuantity);
      }
    }, 500);
  };
  return (
    <StyledProjects>
      <Button tertiary={true} onClick={minusFocused} />
      {text.projects.map((project, index) => {
        return focused === index + 1 ? (
          <Project
            mount={mount}
            key={index}
            title={project.title[language]}
            description={project.description[language]}
            image={project.image}
          />
        ) : null;
      })}
      <Button secondary={true} onClick={plusFocused} />
    </StyledProjects>
  );
};
