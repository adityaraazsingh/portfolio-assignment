import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Import icons
import { SiTailwindcss, SiMongodb } from "react-icons/si"; // Import additional icons

const Skills = () => {
  return (
    <section className="p-8 bg-gradient-to-b from-blue-100 via-white to-blue-50 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Skills</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <FaJs className="text-yellow-500 text-5xl mb-2" />
          <span className="font-medium text-lg">JavaScript</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <FaHtml5 className="text-orange-500 text-5xl mb-2" />
          <span className="font-medium text-lg">HTML</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <FaCss3Alt className="text-blue-500 text-5xl mb-2" />
          <span className="font-medium text-lg">CSS</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <FaReact className="text-blue-400 text-5xl mb-2" />
          <span className="font-medium text-lg">Next.js</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <SiTailwindcss className="text-teal-500 text-5xl mb-2" />
          <span className="font-medium text-lg">Tailwind CSS</span>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-full flex items-center justify-center flex-col text-center transform hover:scale-105 transition duration-300">
          <SiMongodb className="text-green-500 text-5xl mb-2" />
          <span className="font-medium text-lg">MongoDB</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
