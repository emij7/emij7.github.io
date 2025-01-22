import Link from "next/link";
import React from "react";

const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
}) => {
  return (
    <Link
      href={demoLink}
      target="_blank"
      className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-4 ">
        <h2 className="text-foreground text-xl">{name}</h2>
        <p className="text-yellow-100 text-sm">
          {description}
        </p>
      </div>
      <div className="flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-yellow-100 self-end min-w-6" />

      <p className="text-foreground">{date}</p>
    </Link>
  );
};

export default ProjectLayout;
