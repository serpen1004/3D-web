import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectList from "./ProjectList";
import { SectionWrapper } from "../hoc"; 

const Works = () => {
  return (
    <div className="w-full">
      <SectionHeader
        subtitle="My Portfolio"
        title="Featured Projects"
        description="Here are some of my most impactful projects, showcasing my skills and
          experience. Each project includes a brief description, along with links
          to the source code and live demos. These projects demonstrate my ability
          to tackle complex challenges, work across various technologies, and
          manage projects effectively."
      />
      <ProjectList />
    </div>
  );
};

export default SectionWrapper(Works, "");
