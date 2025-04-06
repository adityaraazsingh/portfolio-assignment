import React from "react";
import { UserProfileDetails, UserSolvedProblemsStats } from "react-leetcode";
//https://leetcode.com/u/AdityaRajSingh00721/
const LeetCodeStats = () => {
  return (
    <section className="py-16 px-6 bg-black text-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-12">
        LeetCode Profile
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Profile Details Section */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Profile Details
          </h3>

          <UserProfileDetails username="https://leetcode.com/u/AdityaRajSingh00721/" />
        </div>
        {/* Solved Problems Section */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Solved Problems
          </h3>
          <UserSolvedProblemsStats username="https://leetcode.com/u/AdityaRajSingh00721/" />
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
