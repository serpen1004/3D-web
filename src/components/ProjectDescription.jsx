import React from "react";

const ProjectDescription = ({ title, description }) => {
  return (
    <div className="mt-4">
      <h3 className="text-white text-[22px] font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400 text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProjectDescription;
