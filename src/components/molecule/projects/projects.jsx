import { StyledProjects } from "./projects.styles";
import { text } from "../../../text/text";
import { Project } from "../../atoms/project/project";
import { Content } from "../../atoms/content/content";
import { StyledTitle } from "../../atoms/title/title.styles";

export const Projects = ({ language }) => {
  return (
    <Content margin={"3rem 0"} minHeight="80%">
      <Content margin="0 0 6rem">
        <StyledTitle type={"primary"}>
          {text.portfolioSection[language]}
        </StyledTitle>
      </Content>
      <StyledProjects margin={"6rem 0 0 6rem"}>
        {text.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title[language]}
              description={project.description[language]} //Description not too big to secure responsive site.
              tecnologies={project.tecnologies}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </StyledProjects>
    </Content>
  );
};
