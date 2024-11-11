import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Climate Action Awareness</div>
      <nav className="text-lg">
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#impact" className="hover:text-gray-400">
              Impact
            </a>
          </li>
          <li>
            <a href="#solutions" className="hover:text-gray-400">
              Solutions
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-gray-400">
              News
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
