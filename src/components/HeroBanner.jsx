import React from "react";
import { motion } from "framer-motion";

const HeroBanner = ({ title, subtitle, description, backgroundImage }) => {
  return (
    <div
      className="relative w-full h-[400px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
        {description && <p className="mt-2 text-md max-w-2xl mx-auto">{description}</p>}
      </motion.div>
    </div>
  );
};

export default HeroBanner;
