

// import React, { useState, useEffect } from "react";
// import { IoCloseSharp, IoRemoveSharp, IoExpandSharp } from "react-icons/io5"; // Icons for window controls

// const Typewriter = ({ text, pauseDuration = 50 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex((prev) => prev + 1);
//       }, pauseDuration);
//       return () => clearTimeout(timer);
//     }
//   }, [index, text, pauseDuration]);

//   return (
//     <span>
//       {displayedText}
//       {index < text.length && (
//         <span style={{ textDecoration: "underline", color: "white" }}>_</span>
//       )}
//     </span>
//   );
// };

// const DigitalExperience = () => {
//   const textToType = `
//     /**
//      * Digital Solutions Architect
//      * Aiming for challenging careers and innovation.
//      */

//     const adityaRajSingh = {
//       role: "Full Stack Developer",
//       professionalQualification: "B.Tech in Computer Science Engineering (Govt. Eng. College, Rewa, M.P)",
//       academicQualification: "Class 12 (DAV Public School, Nigahi, M.P)",
//       projects: [
//         { name: "Zello", description: "Team collaboration app with chat system." },
//         { name: "Netflix Clone", description: "Frontend clone using HTML and CSS." },
//         { name: "Key-Cove", description: "Password management website." }
//       ],
//       skills: [
//         "JavaScript", "HTML", "CSS", "Next.js", "Tailwind CSS", "MongoDB"
//       ],
//       personalInfo: {
//         contactNumber: "+91 9179177085",
//         email: "adityarajsingh00721@gmail.com",
//         nationality: "Indian",
//         languages: ["Hindi", "English"]
//       },
//       mission: "Always curious, driven, and thriving under pressure."
//     };
//   `;

//   return (
//     <section className="relative py-20 px-8 bg-black text-gray-100">
//       {/* Top Divider */}
      

//       {/* Main Container */}
//       <div
//         className="relative w-[1000px] h-[800px] mx-auto rounded-3xl shadow-lg bg-gray-800 overflow-hidden 
//         border-4 border-transparent bg-clip-border animate-gradient-border"
//       >
//         {/* Video Background */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//         >
//           <source src="/glitter.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Header Bar */}
//         <div className="relative z-20 bg-gray-900 flex items-center justify-between px-4 py-2 rounded-t-3xl">
//           <h3 className="text-sm font-semibold text-gray-300">
//             Digital Experience - adityaRajSingh.js
//           </h3>
//           <div className="flex space-x-2">
//             {/* Minimize Button */}
//             <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer">
//               <IoRemoveSharp className="text-black text-xs" />
//             </div>
//             {/* Maximize Button */}
//             <div className="w-4 h-4 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center cursor-pointer">
//               <IoExpandSharp className="text-black text-xs" />
//             </div>
//             {/* Close Button */}
//             <div className="w-4 h-4 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center cursor-pointer">
//               <IoCloseSharp className="text-black text-xs" />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 p-6">
//           <pre className="text-left font-mono text-lg text-gray-100 font-bold tracking-wide">
//             <Typewriter text={textToType} pauseDuration={50} />
//           </pre>
//         </div>
//       </div>

//       {/* Bottom Divider */}
      
//     </section>
//   );
// };

// export default DigitalExperience;

import React, { useState, useEffect } from "react";
import { IoCloseSharp, IoRemoveSharp, IoExpandSharp } from "react-icons/io5"; // Icons for window controls

const Typewriter = ({ text, pauseDuration = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }
  }, [index, text, pauseDuration]);

  return (
    <span>
      {displayedText}
      {index < text.length && (
        <span style={{ textDecoration: "underline", color: "white" }}>_</span>
      )}
    </span>
  );
};

const DigitalExperience = () => {
  const textToType = `
    /**
     * Digital Solutions Architect
     * Aiming for challenging careers and innovation.
     */

    const adityaRajSingh = {
      role: "Full Stack Developer",
      professionalQualification: "B.Tech in Computer Science Engineering (Govt. Eng. College, Rewa, M.P)",
      academicQualification: "Class 12 (DAV Public School, Nigahi, M.P)",
      projects: [
        { name: "Zello", description: "Team collaboration app with chat system." },
        { name: "Netflix Clone", description: "Frontend clone using HTML and CSS." },
        { name: "Key-Cove", description: "Password management website." }
      ],
      skills: [
        "JavaScript", "HTML", "CSS", "Next.js", "Tailwind CSS", "MongoDB"
      ],
      personalInfo: {
        contactNumber: "+91 9179177085",
        email: "adityarajsingh00721@gmail.com",
        nationality: "Indian",
        languages: ["Hindi", "English"]
      },
      mission: "Always curious, driven, and thriving under pressure."
    };
  `;

  return (
    <section className="relative py-20 px-8 text-gray-100">
      {/* Main Container */}
      <div
        className="relative w-[1000px] h-[800px] mx-auto rounded-3xl shadow-lg bg-gray-800 overflow-hidden 
        border-4 border-transparent bg-clip-border animate-gradient-border"
      >
        {/* Blurred Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg blur-md"
        >
          <source src="/glitter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header Bar */}
        <div className="relative z-20 bg-gray-900 flex items-center justify-between px-4 py-2 rounded-t-3xl">
          <h3 className="text-sm font-semibold text-gray-300">
            Digital Experience - adityaRajSingh.js
          </h3>
          <div className="flex space-x-2">
            {/* Minimize Button */}
            <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer">
              <IoRemoveSharp className="text-black text-xs" />
            </div>
            {/* Maximize Button */}
            <div className="w-4 h-4 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center cursor-pointer">
              <IoExpandSharp className="text-black text-xs" />
            </div>
            {/* Close Button */}
            <div className="w-4 h-4 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center cursor-pointer">
              <IoCloseSharp className="text-black text-xs" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <pre className="text-left font-mono text-lg text-gray-100 font-bold tracking-wide">
            <Typewriter text={textToType} pauseDuration={50} />
          </pre>
        </div>
      </div>
    </section>
  );
};

export default DigitalExperience;
