
import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="py-20 px-6 flex justify-center">
      {/* Contact Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 relative ">
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
            <p className="text-lg text-gray-300">
              <a
                href="mailto:adityarajsingh00721@gmail.com"
                className="hover:underline hover:text-yellow-400 transition-colors duration-300"
              >
                adityarajsingh00721@gmail.com
              </a>
            </p>
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
          {/* Twitter */}
          <a
            href="https://x.com/_adityaraaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
          >
            <FaTwitter className="text-4xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adityaraazsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
          >
            <FaGithub className="text-4xl" />
          </a>

          {/* Email */}
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
