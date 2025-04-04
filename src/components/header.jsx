import React from "react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing icons

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 border-2  rounded-full shadow-xl ">
        {/* Left Section: Name and Tagline */}
        <div className="flex items-center space-x-4">
            <img
              class="w-10 h-10 rounded-full object-cover border-2 border-black"
              src="dp2.jpg"
              alt="Profile Picture"
            />
          <div>
            <h1 className="  font-bold tracking-wide">
              Aditya Raj Singh
            </h1>
            <p className="text-xs  italic">
              "Striving for innovation and continual learning."
            </p>
          </div>
        </div>
        {/* Right Section: Social Links and Navigation */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-4 md:mt-0">
          {/* Social Media Links */}
          <div className="flex space-x-5 text-xl">
            <a
              href="https://twitter.com/adityaRajSingh007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/adityarajsingh007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:adityarajsingh00721@gmail.com"
              className="hover:text-yellow-200 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Navigation Bar */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm  font-medium">
              <li>
                <a
                  href="#skills"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
