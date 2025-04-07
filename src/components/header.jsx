

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle collapsible menu visibility

  return (
    <header className="sticky top-4 z-50">
      <div
        className="mx-auto max-w-4xl flex items-center justify-between py-4 px-4 sm:px-6
        rounded-full shadow-xl border-4 bg-gradient-to-r from-black to-transparent border-yellow-500 sm:border-l-8"
      >
        {/* Left Section: Name and DP */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-yellow-500 shadow-md"
            src="dp2.jpg"
            alt="Profile Picture"
          />
          <h1 className="text-white font-semibold text-sm sm:text-base tracking-wide">
            Aditya Raj Singh
          </h1>
        </div>

        {/* Menu Button (For Mobile) */}
        <div className="sm:hidden">
          <button
            className="text-white text-sm font-bold px-3 py-2 shadow-md underline hover:no-underline transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-xs sm:text-sm text-gray-300 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Collapsible Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden mt-2 bg-black rounded-lg shadow-md">
          <ul className="flex flex-col items-center space-y-2 py-3 text-xs text-gray-300 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
