import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #2e2b3a, #3b3754)",
        color: "#e0e0e0",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #3b3754" }}
      date={experience.date}
      dateClassName="text-gray-400 font-semibold"
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[22px] font-bold leading-tight'>
          {experience.title}
        </h3>
        <p className='text-indigo-300 text-[16px] font-medium mb-3'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-gray-300 text-[14px] pl-1 tracking-wide leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>
          My Journey So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
