import React, { useState } from "react";
import { StyledProjects } from "./projects.styles";
import { text } from "../../../text/text";
import { Project } from "../../atoms/project/project";
import { Button } from "../../atoms/button/button";
import { Content } from "../../atoms/content/content";
import { StyledTitle } from "../../atoms/title/title.styles";

export const Projects = ({ language }) => {
  const [focused, setFocused] = useState(1);
  const [mount, setMount] = useState(true);
  const projectQuantity = text.projects.length;
  const plusFocused = () => {
    //Change project focus (+1) with arrows
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
    //Change project focus (-1) with arrows
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
    <Content margin={"5rem 0"}>
      <StyledTitle type={"primary"}>
        {text.portfolioSection[language]}
      </StyledTitle>
      <StyledProjects>
        <Button tertiary onClick={minusFocused} />
        {text.projects.map((project, index) => {
          return focused === index + 1 ? (
            <Project
              mount={mount}
              key={index}
              title={project.title[language]}
              description={project.description[language]} //Description not too big to secure responsive site.
              image={project.image}
              link={project.link}
            />
          ) : (
            <Content height="400px"></Content>
          );
        })}
        <Button secondary onClick={plusFocused} />
      </StyledProjects>
    </Content>
  );
};
