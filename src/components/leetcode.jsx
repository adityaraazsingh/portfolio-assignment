// import React, { useState, useEffect } from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const Leetcode = () => {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data from LeetCode API or proxy server
//     fetch("https://leetcode-stats-api.herokuapp.com/AdityaRajSingh00721")
//       .then((response) => response.json())
//       .then((data) => {
//         setStats(data); // Save the entire API response to state
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching LeetCode data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const getRecentProblems = () => {
//     if (!stats || !stats.submissionCalendar) return [];
//     const submissionEntries = Object.entries(stats.submissionCalendar);
//     // Sort by timestamp (key) in descending order
//     submissionEntries.sort((a, b) => b[0] - a[0]);
//     // Get the most recent 3 submissions
//     return submissionEntries.slice(0, 3).map(([timestamp, count]) => ({
//       date: new Date(timestamp * 1000).toLocaleDateString(),
//       submissions: count,
//     }));
//   };

//   const recentProblems = getRecentProblems();

//   return (
//     <section className="py-16 px-6">
//       <div className="mx-auto max-w-4xl bg-gradient-to-br rounded-xl p-8 shadow-xl border-4 border-yellow-500">
//         <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-12">
//           LeetCode Progress
//         </h2>

//         {/* Loading State */}
//         {loading ? (
//           <p className="text-center text-yellow-300">Loading data...</p>
//         ) : stats ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Easy Problems */}
//             <div className="flex flex-col items-center space-y-4">
//               <CircularProgressbar
//                 value={(stats.easySolved / stats.totalEasy) * 100}
//                 text={`${stats.easySolved}/${stats.totalEasy}`}
//                 styles={buildStyles({
//                   textColor: "#FFD700",
//                   pathColor: "#4caf50",
//                   trailColor: "#2c2c2c",
//                 })}
//               />
//               <h3 className="text-yellow-400 font-semibold text-lg">Easy Problems</h3>
//             </div>

//             {/* Medium Problems */}
//             <div className="flex flex-col items-center space-y-4">
//               <CircularProgressbar
//                 value={(stats.mediumSolved / stats.totalMedium) * 100}
//                 text={`${stats.mediumSolved}/${stats.totalMedium}`}
//                 styles={buildStyles({
//                   textColor: "#FFD700",
//                   pathColor: "#ffc107",
//                   trailColor: "#2c2c2c",
//                 })}
//               />
//               <h3 className="text-yellow-400 font-semibold text-lg">Medium Problems</h3>
//             </div>

//             {/* Hard Problems */}
//             <div className="flex flex-col items-center space-y-4">
//               <CircularProgressbar
//                 value={(stats.hardSolved / stats.totalHard) * 100}
//                 text={`${stats.hardSolved}/${stats.totalHard}`}
//                 styles={buildStyles({
//                   textColor: "#FFD700",
//                   pathColor: "#f44336",
//                   trailColor: "#2c2c2c",
//                 })}
//               />
//               <h3 className="text-yellow-400 font-semibold text-lg">Hard Problems</h3>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-yellow-300">Unable to fetch data. Please try again later.</p>
//         )}

//         {/* Recent Problems */}
//         {recentProblems.length > 0 && (
//           <div className="mt-12">
//             <h3 className="text-2xl font-extrabold text-center text-yellow-400 mb-6">
//               Recent Problems
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {recentProblems.map((problem, index) => (
//                 <div
//                   key={index}
//                   className="p-4 bg-gradient-to-r from-gray-800 to-transparent border-l-8 border-yellow-500 rounded-lg shadow-lg"
//                 >
//                   <h4 className="text-lg font-bold text-yellow-400">Submission Date</h4>
//                   <p className="text-white mt-1">{problem.date}</p>
//                   <p className="text-gray-400 mt-1">Submissions: {problem.submissions}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Leetcode;


// import React, { useState, useEffect } from "react";
// import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const Leetcode = () => {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data from LeetCode API
//     fetch("https://leetcode-stats-api.herokuapp.com/AdityaRajSingh00721")
//       .then((response) => response.json())
//       .then((data) => {
//         setStats(data); // Save the entire API response to state
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching LeetCode data:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section
//       className="py-16 px-6"
//       style={{
//         backgroundImage: "url('/path-to-your-space-background.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="mx-auto max-w-4xl bg-gradient-to-br from-transparent to-black rounded-xl p-8 shadow-2xl border-4 border-yellow-500 flex items-center justify-between md:flex-row flex-col gap-8">
//         {loading ? (
//           <p className="text-center text-yellow-300">Loading your stats...</p>
//         ) : stats ? (
//           <>
//             {/* Circular Progress Bar */}
//             <div className="relative w-72 h-72 flex items-center justify-center">
//               <CircularProgressbarWithChildren
//                 value={stats.totalSolved}
//                 maxValue={stats.totalQuestions}
//                 styles={buildStyles({
//                   trailColor: "#2c2c2c", // Dim trail
//                   textColor: "#FFD700", // Gold
//                   pathColor: "#FFD700", // Gold for progress
//                 })}
//               >
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <p className="text-yellow-400 font-bold">Total Solved</p>
//                   <p className="text-yellow-400 text-2xl font-extrabold">
//                     {stats.totalSolved}/{stats.totalQuestions}
//                   </p>
//                 </div>
//               </CircularProgressbarWithChildren>
//             </div>

//             {/* Data Breakdown */}
//             <div className="text-yellow-400 space-y-4 text-lg font-medium w-full md:w-auto flex flex-col items-center md:items-start">
//               <div className="flex items-center gap-4">
//                 <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//                 <span>Easy:</span>
//                 <span className="font-bold text-green-500">{stats.easySolved}/{stats.totalEasy}</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
//                 <span>Medium:</span>
//                 <span className="font-bold text-yellow-500">{stats.mediumSolved}/{stats.totalMedium}</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//                 <span>Hard:</span>
//                 <span className="font-bold text-red-500">{stats.hardSolved}/{stats.totalHard}</span>
//               </div>
//             </div>
//           </>
//         ) : (
//           <p className="text-center text-yellow-300">Unable to fetch data. Please try again later.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Leetcode;

import React, { useState, useEffect } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from LeetCode API
    fetch("https://leetcode-stats-api.herokuapp.com/AdityaRajSingh00721")
      .then((response) => response.json())
      .then((data) => {
        setStats(data); // Save the entire API response to state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching LeetCode data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="py-16 px-6"
      style={{
        backgroundImage: "url('/path-to-your-space-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-4xl bg-gradient-to-br from-transparent to-black rounded-xl p-8 shadow-2xl border-4 border-yellow-500">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-yellow-400">
            LeetCode Progress Tracker
          </h1>
          <p className=" text-gray-300 italic">
            Explore your coding galaxy and track milestones.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-yellow-300">Loading your stats...</p>
        ) : stats ? (
          <div className="flex items-center justify-between md:flex-row flex-col gap-8">
            {/* Circular Progress Bar */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              <CircularProgressbarWithChildren
                value={stats.totalSolved}
                maxValue={stats.totalQuestions}
                styles={buildStyles({
                  trailColor: "#2c2c2c", // Dim trail
                  textColor: "#FFD700", // Gold
                  pathColor: "#FFD700", // Gold for progress
                })}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-yellow-400 font-bold">Total Solved</p>
                  <p className="text-yellow-400 text-2xl font-extrabold">
                    {stats.totalSolved}/{stats.totalQuestions}
                  </p>
                </div>
              </CircularProgressbarWithChildren>
            </div>

            {/* Data Breakdown */}
            <div className="text-yellow-400 space-y-4 text-lg font-medium w-full md:w-auto flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Easy:</span>
                <span className="font-bold text-green-500">{stats.easySolved}/{stats.totalEasy}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>Medium:</span>
                <span className="font-bold text-yellow-500">{stats.mediumSolved}/{stats.totalMedium}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span>Hard:</span>
                <span className="font-bold text-red-500">{stats.hardSolved}/{stats.totalHard}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-yellow-300">Unable to fetch data. Please try again later.</p>
        )}
      </div>
    </section>
  );
};

export default Leetcode;
