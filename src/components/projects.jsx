import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Zello",
      description: "A full-stack web application for team collaboration.",
      repo: "https://github.com/adityaRajSingh007/Zello-Repository",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
    },
    {
      name: "Netflix Clone",
      description: "Frontend clone using HTML and CSS.",
      repo: "https://github.com/adityaRajSingh007/Netflix-Clone",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
    },
    {
      name: "Key-Cove",
      description: "Password management website using Tailwind CSS and MongoDB.",
      repo: "https://github.com/adityaRajSingh007/Key-Cove",
      image: "https://via.placeholder.com/150", // Replace with the project image URL
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="relative p-4 bg-white rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-105 group"
          >
            {/* Moving Border */}
            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-border transition-all"></div>
            
            {/* Project Content */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
