import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2024 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-xl hover:text-gray-400"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-gray-400"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl hover:text-gray-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
