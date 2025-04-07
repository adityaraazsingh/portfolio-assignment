
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-4 z-50">
      <div
        className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between py-4 px-6 
        rounded-full shadow-xl border-4 bg-gradient-to-r from-black to-transparent border-t-4 border-b-4 border-yellow-500 border-l-8"
      >
        {/* Left Section: Name and Tagline */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500 shadow-md"
            src="dp2.jpg"
            alt="Profile Picture"
          />
          <div>
            <h1 className="text-white font-semibold text-lg tracking-wide">
              Aditya Raj Singh
            </h1>
            <p className="text-yellow-400 text-sm italic">
              "Striving for innovation and continual learning."
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm text-gray-300 font-medium">
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
    </header>
  );
};

export default Header;
