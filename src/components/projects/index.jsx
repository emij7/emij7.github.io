import React from "react";
import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl px-2 space-y-8 flex flex-col items-center">
      {projects.map((project) => (
        <ProjectLayout key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
