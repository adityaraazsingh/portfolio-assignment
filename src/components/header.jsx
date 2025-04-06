// // import React from "react";
// // import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing icons

// // const Header = () => {
// //   return (
// //     <header className="sticky top-0 z-50">
// //       <div className="bg-white container mx-auto flex flex-col md:flex-row items-center justify-between p-6 border-2 rounded-full shadow-xl">
// //         {/* Left Section: Name and Tagline */}
// //         <div className="flex items-center space-x-4">
// //           <img
// //             className="w-10 h-10 rounded-full object-cover border-2 border-black"
// //             src="dp2.jpg"
// //             alt="Profile Picture"
// //           />
// //           <div>
// //             <h1 className="text-black font-bold tracking-wide">
// //               Aditya Raj Singh
// //             </h1>
// //             <p className="text-gray-600 text-xs italic">
// //               "Striving for innovation and continual learning."
// //             </p>
// //           </div>
// //         </div>

// //         {/* Right Section: Social Links and Navigation */}
// //         <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-4 md:mt-0">
// //           {/* Navigation Bar */}
// //           <nav className="mt-4 md:mt-0">
// //             <ul className="flex space-x-6 text-sm text-gray-700 font-medium">
// //               <li>
// //                 <a
// //                   href="#skills"
// //                   className="hover:text-yellow-500 transition-all duration-300"
// //                 >
// //                   Skills
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#projects"
// //                   className="hover:text-yellow-500 transition-all duration-300"
// //                 >
// //                   Projects
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#experience"
// //                   className="hover:text-yellow-500 transition-all duration-300"
// //                 >
// //                   Experience
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#contact"
// //                   className="hover:text-yellow-500 transition-all duration-300"
// //                 >
// //                   Contact
// //                 </a>
// //               </li>
// //             </ul>
// //           </nav>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// import React from "react";

// const Header = () => {
//   return (
//     <header className="sticky top-4 z-50">
//       <div className="bg-white mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between py-4 px-6 rounded-full shadow-lg border border-gray-200">
//         {/* Left Section: Name and Tagline */}
//         <div className="flex items-center space-x-4">
//           <img
//             className="w-10 h-10 rounded-full object-cover border border-gray-300"
//             src="dp2.jpg"
//             alt="Profile Picture"
//           />
//           <div>
//             <h1 className="text-gray-800 font-semibold text-lg">
//               Aditya Raj Singh
//             </h1>
//             <p className="text-gray-500 text-sm italic">
//               "Striving for innovation and continual learning."
//             </p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="mt-4 md:mt-0">
//           <ul className="flex space-x-6 text-sm text-gray-600 font-medium">
//             <li>
//               <a
//                 href="#skills"
//                 className="hover:text-gray-800 transition-all duration-300"
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="hover:text-gray-800 transition-all duration-300"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="hover:text-gray-800 transition-all duration-300"
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-gray-800 transition-all duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-4 z-50">
      <div
        className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between py-4 px-6 
        rounded-full shadow-xl border-4 bg-gradient-to-r from-gray-800 to-black border-t-4 border-b-4 border-yellow-500 border-l-8"
      >
        {/* Left Section: Name and Tagline */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500 shadow-md"
            src="dp2.jpg"
            alt="Profile Picture"
          />
          <div>
            <h1 className="text-white font-semibold text-lg tracking-wide">
              Aditya Raj Singh
            </h1>
            <p className="text-yellow-400 text-sm italic">
              "Striving for innovation and continual learning."
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm text-gray-300 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
