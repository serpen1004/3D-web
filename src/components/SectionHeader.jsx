import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; 

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <div className="w-full text-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>{subtitle}</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>{title}</h2>
      </motion.div>

      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="mt-6 text-gray-300 text-[16px] max-w-3xl mx-auto leading-[28px]"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
