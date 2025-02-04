"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { delay, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.4,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl px-2 space-y-8 flex flex-col items-center"
    >
      {projects.map((project) => (
        <ProjectLayout key={project.id} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
