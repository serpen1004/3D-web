import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets"; 

const TiltCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: index * 0.2, duration: 0.6 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center"
    >
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
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

export default TiltCard;
