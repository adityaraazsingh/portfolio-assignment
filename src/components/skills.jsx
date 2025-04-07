

// import React from "react";
// import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb } from "react-icons/si";

// const Skills = () => {
//   return (
//     <section className="py-20 px-8 text-gray-100">
//       {/* Top Divider */}
//       {/* <hr className="border-yellow-500 opacity-70 mb-12" /> */}
      
//       {/* Heading */}
//       <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide text-yellow-400">
//         Skills
//       </h2>

//       {/* Skills Grid */}
//       <ul className="flex flex-wrap items-center justify-center gap-10">
//         {/* JavaScript */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-yellow-500 shadow-md border-2 border-yellow-600">
//             <FaJs className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             JavaScript
//           </span>
//         </li>

//         {/* HTML */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-orange-500 shadow-md border-2 border-yellow-600">
//             <FaHtml5 className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-2 left-2 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             HTML
//           </span>
//         </li>

//         {/* CSS */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-blue-500 shadow-md border-2 border-yellow-600">
//             <FaCss3Alt className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-3 right-3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             CSS
//           </span>
//         </li>

//         {/* React */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-blue-400 shadow-md border-2 border-yellow-600">
//             <FaReact className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-3 left-3 w-3 h-3 bg-blue-200 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             React
//           </span>
//         </li>

//         {/* Tailwind CSS */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-teal-500 shadow-md border-2 border-yellow-600">
//             <SiTailwindcss className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute top-2 left-2 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             Tailwind CSS
//           </span>
//         </li>

//         {/* MongoDB */}
//         <li className="group flex flex-col items-center text-center space-y-3">
//           <div className="relative p-6 rounded-full bg-green-500 shadow-md border-2 border-yellow-600">
//             <SiMongodb className="text-black text-4xl group-hover:scale-125 transition-transform duration-300" />
//             <span className="absolute bottom-3 right-3 w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
//           </div>
//           <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
//             MongoDB
//           </span>
//         </li>
//       </ul>

//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-16 px-4 sm:px-8 text-gray-100">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide text-yellow-400">
        Skills
      </h2>

      {/* Skills Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {/* JavaScript */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-yellow-500 shadow-md border-2 border-yellow-600">
            <FaJs className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            JavaScript
          </span>
        </li>

        {/* HTML */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-orange-500 shadow-md border-2 border-yellow-600">
            <FaHtml5 className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-2 left-2 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            HTML
          </span>
        </li>

        {/* CSS */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-blue-500 shadow-md border-2 border-yellow-600">
            <FaCss3Alt className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            CSS
          </span>
        </li>

        {/* React */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-blue-400 shadow-md border-2 border-yellow-600">
            <FaReact className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-3 left-3 w-3 h-3 bg-blue-200 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            React
          </span>
        </li>

        {/* Tailwind CSS */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-teal-500 shadow-md border-2 border-yellow-600">
            <SiTailwindcss className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute top-2 left-2 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            Tailwind CSS
          </span>
        </li>

        {/* MongoDB */}
        <li className="group flex flex-col items-center text-center space-y-3">
          <div className="relative p-5 sm:p-6 rounded-full bg-green-500 shadow-md border-2 border-yellow-600">
            <SiMongodb className="text-black text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300" />
            <span className="absolute bottom-3 right-3 w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            MongoDB
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
