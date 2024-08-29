import React from "react";

const Header = ({ links }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">My Portfolio</div>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
