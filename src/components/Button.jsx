import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
