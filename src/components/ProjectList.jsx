import React from "react";
import TiltCard from "./TiltCard"; 
import { projects } from "../constants";
const ProjectList = () => {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-10">
      {projects.map((project, index) => (
        <TiltCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
