import React from "react";

const IconButton = ({ iconSrc, altText, onClick, size = "w-5 h-5" }) => {
  return (
    <div
      onClick={onClick}
      className="bg-black bg-opacity-60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-opacity-80 transition duration-200"
    >
      <img
        src={iconSrc}
        alt={altText}
        className={`object-contain ${size}`}
      />
    </div>
  );
};

export default IconButton;
