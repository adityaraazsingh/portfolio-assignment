// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       year: "2019 - 2023",
//       title: "B.Tech in Computer Science Engineering",
//       description: "Govt. Engineering College, Rewa, M.P.",
//     },
//     {
//       year: "2017 - 2019",
//       title: "Class 12",
//       description: "DAV Public School, Nigahi, M.P.",
//     },
//   ];

//   return (
//     <section className="p-6 ">
//       <h2 className="text-3xl font-extrabold text-center text-gray-100 mb-8">
//         Experience
//       </h2>
//       <ul className="space-y-6">
//         {experiences.map((experience, index) => (
//           <li
//             key={index}
//             className="flex items-center space-x-4 bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
//           >
//             {/* Year Section */}
//             <div className="flex flex-col items-center text-blue-400 min-w-[80px]">
//               <span className="text-sm font-bold">{experience.year}</span>
//               <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex justify-center items-center text-lg font-bold shadow-md">
//                 ⇨
//               </div>
//             </div>

//             {/* Experience Details */}
//             <div className="w-full">
//               <h3 className="text-lg font-semibold text-gray-100 mb-1">
//                 {experience.title}
//               </h3>
//               <p className="text-sm text-gray-400">{experience.description}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Experience;

// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       year: "2019 - 2023",
//       title: "B.Tech in Computer Science Engineering",
//       description: "Govt. Engineering College, Rewa, M.P.",
//     },
//     {
//       year: "2017 - 2019",
//       title: "Class 12",
//       description: "DAV Public School, Nigahi, M.P.",
//     },
//   ];

//   return (
//     <section className="p-8">
//       <h2 className="text-3xl font-bold text-center text-white tracking-wider mb-10">
//         Experience
//       </h2>
//       <div className="grid gap-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-500">
//         {experiences.map((experience, index) => (
//           <div
//             key={index}
//             className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 flex items-start"
//           >
//             {/* Timeline marker */}
//             <span
//               className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 border-4 border-gray-900 rounded-full"
//               style={{ content: '""' }}
//             ></span>

//             {/* Experience Details */}
//             <div className="ml-6">
//               <span className="text-sm text-gray-400">{experience.year}</span>
//               <h3 className="text-lg text-white font-semibold mt-2">
//                 {experience.title}
//               </h3>
//               <p className="text-sm text-gray-400 mt-1">
//                 {experience.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";

const Experience = () => {
  const experiences = [
    {
      year: "2019 - 2023",
      title: "B.Tech in Computer Science Engineering",
      description: "Govt. Engineering College, Rewa, M.P.",
    },
    {
      year: "2017 - 2019",
      title: "Class 12",
      description: "DAV Public School, Nigahi, M.P.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center text-yellow-400 tracking-wider mb-12">
        Experience
      </h2>
      <div className="grid gap-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-[2px] before:bg-yellow-500">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 flex items-start"
          >
            {/* Timeline marker */}
            <span
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-500 border-4 border-gray-900 rounded-full"
              style={{ content: '""' }}
            ></span>

            {/* Experience Details */}
            <div className="ml-6">
              <span className="text-sm text-gray-400">{experience.year}</span>
              <h3 className="text-lg text-yellow-400 font-semibold mt-2">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
