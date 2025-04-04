import React from "react";

const Experience = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <ul className="space-y-6">
        <li className="bg-white p-6 shadow rounded-md flex items-center space-x-6">
          {/* Year and Arrow */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 text-lg font-semibold">2019 - 2023</span>
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center animate-bounce">
              ➤
            </div>
          </div>
          {/* Experience Details */}
          <div>
            <strong>B.Tech in Computer Science Engineering:</strong> Govt.
            Engineering College, Rewa, M.P.
          </div>
        </li>
        <li className="bg-white p-6 shadow rounded-md flex items-center space-x-6">
          {/* Year and Arrow */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 text-lg font-semibold">2017 - 2019</span>
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center animate-bounce">
              ➤
            </div>
          </div>
          {/* Experience Details */}
          <div>
            <strong>Class 12:</strong> DAV Public School, Nigahi, M.P.
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
