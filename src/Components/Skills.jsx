import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative h-[100dvh] w-full bg-yellow-100 object-contain object-center"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-skills-img bg-cover bg-center z-0" />

      {/* Backdrop Blur Layer */}
      <div className="absolute bg-black opacity-60 inset-0 backdrop-blur-sm z-10" />

      {/* content */}
      <div className="absolute inset-0 max-w-[90%] mx-auto h-[70%] my-auto backdrop-blur-lg mx-atuo z-20 rounded-lg shadow-lg">
        {" "}
      </div>
    </div>
  );
};

export default Skills;
