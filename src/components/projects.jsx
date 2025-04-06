// // import React, { useState } from "react";
// // import { FaMagnifyingGlass } from "react-icons/fa6";

// // const Projects = () => {
// //   const projectList = [
// //     {
// //       name: "Zello",
// //       description: "A full-stack web application for team collaboration.",
// //       repo: "https://github.com/adityaRajSingh007/Zello-Repository",
// //       image: "https://via.placeholder.com/150", // Replace with the project image URL
// //       technologies: ["React", "Node.js", "Express", "MongoDB"],
// //     },
// //     {
// //       name: "Netflix Clone",
// //       description: "Frontend clone using HTML and CSS.",
// //       repo: "https://github.com/adityaRajSingh007/Netflix-Clone",
// //       image: "https://via.placeholder.com/150", // Replace with the project image URL
// //       technologies: ["HTML", "CSS"],
// //     },
// //     {
// //       name: "Key-Cove",
// //       description:
// //         "Password management website using Tailwind CSS and MongoDB.",
// //       repo: "https://github.com/adityaRajSingh007/Key-Cove",
// //       image: "https://via.placeholder.com/150", // Replace with the project image URL
// //       technologies: ["Tailwind CSS", "MongoDB", "JavaScript"],
// //     },
// //   ];

// //   const [searchQuery, setSearchQuery] = useState("");

// //   // Filter logic (search by name or technologies)
// //   const filteredProjects = projectList.filter(
// //     (project) =>
// //       project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       project.technologies.some((tech) =>
// //         tech.toLowerCase().includes(searchQuery.toLowerCase())
// //       )
// //   );

// //   return (
// //     <section className="p-10 rounded-lg">
// //       <h2 className="text-3xl font-extrabold text-center text-gray-100 mb-8">
// //         Projects
// //       </h2>

// //       {/* Search Input */}
// //       <div className="flex items-center mb-8 justify-center">
// //         <div className="flex bg-gray-900 text-gray-400 rounded-md shadow-sm p-2 w-full max-w-md">
// //           {/* Search Input Field */}
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             placeholder="Search projects or technologies..."
// //             className="bg-transparent text-gray-100 w-full focus:outline-none"
// //           />
// //           {/* Magnifying Glass Icon */}
// //           <span className="text-gray-400 flex items-center pl-2">
// //             <FaMagnifyingGlass />
// //           </span>
// //         </div>
// //       </div>

// //       {/* Projects Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {filteredProjects.map((project, index) => (
// //           <div
// //             key={index}
// //             className="relative p-6 bg-gray-900 text-gray-100 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group"
// //           >
// //             {/* Project Image */}
// //             <img
// //               src={project.image}
// //               alt={project.name}
// //               className="w-full h-40 object-cover rounded-md mb-4 border border-gray-700"
// //             />

// //             {/* Project Name */}
// //             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

// //             {/* Project Description */}
// //             <p className="text-gray-400 mb-4">{project.description}</p>

// //             {/* Technologies */}
// //             <p className="text-sm text-gray-400 mb-4">
// //               <span className="font-semibold text-gray-200">Technologies:</span>{" "}
// //               {project.technologies.join(", ")}
// //             </p>

// //             {/* GitHub Link */}
// //             <a
// //               href={project.repo}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
// //             >
// //               View on GitHub →
// //             </a>
// //           </div>
// //         ))}
// //       </div>

// //       {/* No Results Message */}
// //       {filteredProjects.length === 0 && (
// //         <p className="text-center text-gray-400 mt-4">
// //           No projects found matching your search.
// //         </p>
// //       )}
// //     </section>
// //   );
// // };

// // export default Projects;

// import React, { useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// const Projects = () => {
//   const projectList = [
//     {
//       name: "Zello",
//       description: "A full-stack web application for team collaboration.",
//       repo: "https://github.com/adityaRajSingh007/Zello-Repository",
//       image: "https://via.placeholder.com/150", // Replace with the project image URL
//       technologies: ["React", "Node.js", "Express", "MongoDB"],
//     },
//     {
//       name: "Netflix Clone",
//       description: "Frontend clone using HTML and CSS.",
//       repo: "https://github.com/adityaRajSingh007/Netflix-Clone",
//       image: "https://via.placeholder.com/150", // Replace with the project image URL
//       technologies: ["HTML", "CSS"],
//     },
//     {
//       name: "Key-Cove",
//       description:
//         "Password management website using Tailwind CSS and MongoDB.",
//       repo: "https://github.com/adityaRajSingh007/Key-Cove",
//       image: "https://via.placeholder.com/150", // Replace with the project image URL
//       technologies: ["Tailwind CSS", "MongoDB", "JavaScript"],
//     },
//   ];

//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter logic (search by name or technologies)
//   const filteredProjects = projectList.filter(
//     (project) =>
//       project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       project.technologies.some((tech) =>
//         tech.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//   );

//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-12">
//         Projects
//       </h2>

//       {/* Search Input */}
//       <div className="flex items-center justify-center mb-12">
//         <div className="flex bg-gray-800 text-gray-400 rounded-lg shadow-sm p-3 w-full max-w-lg">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search projects or technologies..."
//             className="bg-transparent text-gray-100 w-full focus:outline-none"
//           />
//           <span className="text-gray-400 flex items-center pl-3">
//             <FaMagnifyingGlass />
//           </span>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project, index) => (
//           <div
//             key={index}
//             className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 group"
//           >
//             {/* Project Image */}
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-40 object-cover rounded-md mb-4 border border-gray-600"
//             />

//             {/* Project Name */}
//             <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

//             {/* Project Description */}
//             <p className="text-gray-400 mb-4">{project.description}</p>

//             {/* Technologies */}
//             <p className="text-sm text-gray-400 mb-4">
//               <span className="font-semibold text-gray-200">Technologies:</span>{" "}
//               {project.technologies.join(", ")}
//             </p>

//             {/* GitHub Link */}
//             <a
//               href={project.repo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
//             >
//               View on GitHub →
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* No Results Message */}
//       {filteredProjects.length === 0 && (
//         <p className="text-center text-gray-400 mt-8">
//           No projects found matching your search.
//         </p>
//       )}
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Projects = () => {
  const projectList = [
    {
      name: "Zello",
      description: "A full-stack web application for team collaboration.",
      repo: "https://github.com/adityaRajSingh007/Zello-Repository",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Netflix Clone",
      description: "Frontend clone using HTML and CSS.",
      repo: "https://github.com/adityaRajSingh007/Netflix-Clone",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
      technologies: ["HTML", "CSS"],
    },
    {
      name: "Key-Cove",
      description:
        "Password management website using Tailwind CSS and MongoDB.",
      repo: "https://github.com/adityaRajSingh007/Key-Cove",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
      technologies: ["Tailwind CSS", "MongoDB", "JavaScript"],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic (search by name or technologies)
  const filteredProjects = projectList.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-12">
        Projects
      </h2>

      {/* Search Input */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex bg-gray-800 text-gray-400 rounded-lg shadow-lg p-3 w-full max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            className="bg-transparent text-gray-100 w-full focus:outline-none"
          />
          <span className="text-yellow-400 flex items-center pl-3">
            <FaMagnifyingGlass />
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 group"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Project Name */}
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              {project.name}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Technologies */}
            <p className="text-sm text-gray-400 mb-4">
              <span className="font-semibold text-yellow-400">Technologies:</span>{" "}
              {project.technologies.join(", ")}
            </p>

            {/* GitHub Link */}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          No projects found matching your search.
        </p>
      )}
    </section>
  );
};

export default Projects;
