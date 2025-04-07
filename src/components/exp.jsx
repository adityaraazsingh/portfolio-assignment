
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
    <section className="py-12 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 tracking-wider mb-10">
        Experience
      </h2>
      <div className="relative grid gap-10 before:absolute before:left-2 sm:before:left-4 before:top-0 before:bottom-0 before:w-[2px] before:bg-yellow-500">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col sm:flex-row items-start"
          >
            {/* Timeline Marker */}
            <span
              className="absolute -left-4 sm:-left-6 top-8 sm:top-1/2 transform sm:-translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 border-4 border-gray-900 rounded-full"
              style={{ content: '""' }}
            ></span>

            {/* Experience Details */}
            <div className="ml-0 sm:ml-6">
              <span className="text-xs sm:text-sm text-gray-400 block">{experience.year}</span>
              <h3 className="text-lg sm:text-xl text-yellow-400 font-semibold mt-2">
                {experience.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
