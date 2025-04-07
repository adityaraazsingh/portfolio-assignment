// import React from "react";

// const Header = () => {
//   return (
//     <header className="sticky top-4 z-50">
//       <div
//         className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center sm:justify-between py-4 px-4 sm:px-6
//         rounded-full shadow-xl border-4 bg-gradient-to-r from-black to-transparent border-yellow-500 sm:border-l-8"
//       >
//         {/* Left Section: Name and Tagline */}
//         <div className="flex items-center space-x-4 mb-4 sm:mb-0">
//           <img
//             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-yellow-500 shadow-md"
//             src="dp2.jpg"
//             alt="Profile Picture"
//           />
//           <div>
//             <h1 className="text-white font-semibold text-base sm:text-lg tracking-wide">
//               Aditya Raj Singh
//             </h1>
//             <p className="text-yellow-400 text-xs sm:text-sm italic">
//               "Striving for innovation and continual learning."
//             </p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="w-full sm:w-auto">
//           <ul className="flex flex-wrap sm:flex-nowrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-300 font-medium">
//             <li>
//               <a
//                 href="#skills"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
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

// import React, { useState } from "react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State to handle collapsible menu visibility

//   return (
//     <header className="sticky top-4 z-50">
//       <div
//         className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center sm:justify-between py-4 px-4 sm:px-6
//         rounded-full shadow-xl border-4 bg-gradient-to-r from-black to-transparent border-yellow-500 sm:border-l-8"
//       >
//         {/* Left Section: Name and Tagline */}
//         <div className="flex items-center space-x-4">
//           <img
//             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-yellow-500 shadow-md"
//             src="dp2.jpg"
//             alt="Profile Picture"
//           />
//           <div>
//             <h1 className="text-white font-semibold text-base sm:text-lg tracking-wide">
//               Aditya Raj Singh
//             </h1>
//             <p className="text-yellow-400 text-xs sm:text-sm italic">
//               "Striving for innovation and continual learning."
//             </p>
//           </div>
//         </div>

//         {/* Navigation Menu */}
//         <div className="sm:hidden w-full flex justify-end mt-4">
//           {/* Collapsible Menu Button */}
//           <button
//             className="text-yellow-400 text-sm font-bold border border-yellow-500 rounded-md px-3 py-2 shadow-md hover:bg-yellow-500 hover:text-black transition-colors duration-300"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             Menu
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden sm:block sm:w-auto">
//           <ul className="flex space-x-6 text-xs sm:text-sm text-gray-300 font-medium">
//             <li>
//               <a
//                 href="#skills"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Collapsible Navigation */}
//       {menuOpen && (
//         <nav className="sm:hidden w-full mt-2 bg-black rounded-lg shadow-md">
//           <ul className="flex flex-col items-center space-y-2 py-3 text-xs text-gray-300 font-medium">
//             <li>
//               <a
//                 href="#skills"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//                 onClick={() => setMenuOpen(false)} // Close menu on click
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//                 onClick={() => setMenuOpen(false)} // Close menu on click
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//                 onClick={() => setMenuOpen(false)} // Close menu on click
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-yellow-400 transition-all ease-in-out duration-300"
//                 onClick={() => setMenuOpen(false)} // Close menu on click
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle collapsible menu visibility

  return (
    <header className="sticky top-4 z-50">
      <div
        className="mx-auto max-w-4xl flex items-center justify-between py-4 px-4 sm:px-6
        rounded-full shadow-xl border-4 bg-gradient-to-r from-black to-transparent border-yellow-500 sm:border-l-8"
      >
        {/* Left Section: Name and DP */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-yellow-500 shadow-md"
            src="dp2.jpg"
            alt="Profile Picture"
          />
          <h1 className="text-white font-semibold text-sm sm:text-base tracking-wide">
            Aditya Raj Singh
          </h1>
        </div>

        {/* Menu Button (For Mobile) */}
        <div className="sm:hidden">
          <button
            className="text-white text-sm font-bold px-3 py-2 shadow-md underline hover:no-underline transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-xs sm:text-sm text-gray-300 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Collapsible Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden mt-2 bg-black rounded-lg shadow-md">
          <ul className="flex flex-col items-center space-y-2 py-3 text-xs text-gray-300 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
