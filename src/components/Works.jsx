import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-col items-center"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400,
        }}
        className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg w-full sm:w-[350px]"
      >
        <div className="relative w-full h-[220px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-end items-start p-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black bg-opacity-60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-opacity-80 transition duration-200"
            >
              <img
                src={github}
                alt="source code"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white text-[22px] font-semibold">{name}</h3>
          <p className="mt-2 text-gray-400 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-medium ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-gray-400`}>My Portfolio</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Featured Projects
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-300 text-[16px] max-w-3xl mx-auto leading-[28px] text-center"
      >
        Here are some of my most impactful projects, showcasing my skills and
        experience. Each project includes a brief description, along with links
        to the source code and live demos. These projects demonstrate my ability
        to tackle complex challenges, work across various technologies, and
        manage projects effectively.
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
