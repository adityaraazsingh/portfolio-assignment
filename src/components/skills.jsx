// import React from "react";
// import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Import icons
// import { SiTailwindcss, SiMongodb } from "react-icons/si"; // Import additional icons

// const Skills = () => {
//   return (
//     <section className="p-10 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-100">Skills</h2>
//       <ul className="flex flex-wrap items-center justify-center gap-10">
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4">
//             <FaJs className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             JavaScript
//           </span>
//         </li>
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-4">
//             <FaHtml5 className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             HTML
//           </span>
//         </li>
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-4">
//             <FaCss3Alt className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             CSS
//           </span>
//         </li>
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-full p-4">
//             <FaReact className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             React
//           </span>
//         </li>
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-4">
//             <SiTailwindcss className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             Tailwind CSS
//           </span>
//         </li>
//         <li className="group flex flex-col items-center text-center">
//           <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4">
//             <SiMongodb className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
//           </div>
//           <span className="mt-2 text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
//             MongoDB
//           </span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;

// import React from "react";
// import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb } from "react-icons/si";

// const Skills = () => {
//   return (
//     <section className="py-20 px-8 bg-black text-gray-100">
//       {/* Top Divider */}
//       <hr className="border-gray-700 mb-12" />
      
//       {/* Heading */}
//       <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide">
//          Skills
//       </h2>

//       {/* Skills Grid */}
//       <ul className="flex flex-wrap items-center justify-center gap-10">
//         {/* JavaScript */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-yellow-500 shadow-md">
//             <FaJs className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             JavaScript
//           </span>
//         </li>

//         {/* HTML */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-orange-500 shadow-md">
//             <FaHtml5 className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-2 left-2 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">
//             HTML
//           </span>
//         </li>

//         {/* CSS */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-blue-500 shadow-md">
//             <FaCss3Alt className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-3 right-3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
//             CSS
//           </span>
//         </li>

//         {/* React */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-blue-400 shadow-md">
//             <FaReact className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-3 left-3 w-3 h-3 bg-blue-200 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
//             React
//           </span>
//         </li>

//         {/* Tailwind CSS */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-teal-500 shadow-md">
//             <SiTailwindcss className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-2 left-2 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-teal-400 transition-colors duration-300">
//             Tailwind CSS
//           </span>
//         </li>

//         {/* MongoDB */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-green-500 shadow-md">
//             <SiMongodb className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-3 right-3 w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
//             MongoDB
//           </span>
//         </li>
//       </ul>

//       {/* Bottom Divider */}
     
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-20 px-8 bg-black text-gray-100">
      {/* Top Divider */}
      {/* <hr className="border-yellow-500 opacity-70 mb-12" /> */}
      
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide text-yellow-400">
        Skills
      </h2>

      {/* Skills Grid */}
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {/* JavaScript */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-yellow-500 shadow-md border-2 border-yellow-600">
            <FaJs className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            JavaScript
          </span>
        </li>

        {/* HTML */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-orange-500 shadow-md border-2 border-yellow-600">
            <FaHtml5 className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-2 left-2 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            HTML
          </span>
        </li>

        {/* CSS */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-blue-500 shadow-md border-2 border-yellow-600">
            <FaCss3Alt className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            CSS
          </span>
        </li>

        {/* React */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-blue-400 shadow-md border-2 border-yellow-600">
            <FaReact className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-3 left-3 w-3 h-3 bg-blue-200 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            React
          </span>
        </li>

        {/* Tailwind CSS */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-teal-500 shadow-md border-2 border-yellow-600">
            <SiTailwindcss className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-2 left-2 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            Tailwind CSS
          </span>
        </li>

        {/* MongoDB */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-6 rounded-full bg-green-500 shadow-md border-2 border-yellow-600">
            <SiMongodb className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-3 right-3 w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            MongoDB
          </span>
        </li>
      </ul>

    </section>
  );
};

export default Skills;
