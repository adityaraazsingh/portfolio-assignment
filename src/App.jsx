import React from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/exp";
import Contacts from "./components/contacts";
import DigitalExperience from "./components/editor";
//import LeetCodeStats from "./components/api/leetcode";
//import Leetcode from "./components/leetcode";

const App = () => {
  return (
    <div className="relative ">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-white">
        <Header />
        <DigitalExperience />
        <Skills />
        <Projects />
        <Experience />
        
        <Contacts />
      </div>
    </div>
  );
};

export default App;
