import React from "react";

const ImageWithOverlay = ({ imageSrc, overlayContent, onClick }) => {
  return (
    <div className="relative w-full h-[220px]">
      <img
        src={imageSrc}
        alt="project_image"
        className="w-full h-full object-cover rounded-lg"
      />
      <div
        className="absolute inset-0 flex justify-end items-start p-3 cursor-pointer"
        onClick={onClick}
      >
        {overlayContent && (
          <div className="bg-black bg-opacity-60 w-10 h-10 rounded-full flex justify-center items-center hover:bg-opacity-80 transition duration-200">
            {overlayContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageWithOverlay;
