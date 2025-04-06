// import React from "react";
// import { FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons

// const Contacts = () => {
//   return (
//     <section className="p-10 flex flex-col items-center">
//       {/* Container for Depth */}
//       <div className="relative w-full max-w-4xl bg-blue-950 rounded-3xl shadow-2xl p-10">
//         {/* Outer Layer for Illusion */}
//         <div className="absolute inset-0 rounded-3xl border border-blue-900 -z-10"></div>

//         {/* Content */}
//         <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-12">
//           Contacts
//         </h2>

//         {/* Social Media Links */}
//         <div className="flex justify-center space-x-10 mb-8">
//           <a
//             href="https://twitter.com/adityaRajSingh007"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition-all duration-300"
//           >
//             <FaTwitter className="text-white text-4xl drop-shadow-md hover:scale-110" />
//           </a>
//           <a
//             href="https://github.com/adityarajsingh007"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition-all duration-300"
//           >
//             <FaGithub className="text-white text-4xl drop-shadow-md hover:scale-110" />
//           </a>
//           <a
//             href="mailto:adityarajsingh00721@gmail.com"
//             className="hover:text-blue-400 transition-all duration-300"
//           >
//             <FaEnvelope className="text-white text-4xl drop-shadow-md hover:scale-110" />
//           </a>
//         </div>

//         {/* Contact Information */}
//         <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
//           <div className="flex flex-col items-center">
//             <div className="w-14 h-14 bg-blue-900 rounded-full flex justify-center items-center shadow-md">
//               <FaEnvelope className="text-white text-2xl" />
//             </div>
//             <p className="mt-4 text-lg text-gray-300">
//               adityarajsingh00721@gmail.com
//             </p>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-14 h-14 bg-blue-900 rounded-full flex justify-center items-center shadow-md">
//               <FaPhone className="text-white text-2xl" />
//             </div>
//             <p className="mt-4 text-lg text-gray-300">+91 9179177085</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;

import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="py-20 px-6 bg-black flex justify-center">
      {/* Contact Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-10 relative">
        {/* Card Border Glow */}
        <div className="absolute inset-0 rounded-3xl border-[3px] border-yellow-500 opacity-50 blur-md -z-10"></div>

        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Let's Connect
        </h2>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {/* Email Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full shadow-lg border-2 border-yellow-500">
              <FaEnvelope className="text-yellow-400 text-3xl" />
            </div>
            <p className="text-lg text-gray-300">adityarajsingh00721@gmail.com</p>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full shadow-lg border-2 border-yellow-500">
              <FaPhone className="text-yellow-400 text-3xl" />
            </div>
            <p className="text-lg text-gray-300">+91 9179177085</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="https://twitter.com/adityaRajSingh007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
          >
            <FaTwitter className="text-4xl" />
          </a>
          <a
            href="https://github.com/adityarajsingh007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="mailto:adityarajsingh00721@gmail.com"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
          >
            <FaEnvelope className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
