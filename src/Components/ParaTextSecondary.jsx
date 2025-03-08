import React from "react";

const ParaTextSecondary = ({ type, children }) => {
  const style = {
    hero: "text-center text-sm lg:text-lg mb-6 px-6 py-2 lg:mb-8 lg:px-16 lg:py-4 tracking-wide font-light",
    about:
      "text-center text-sm lg:text-lg mb-2 px-3 py-2 lg:mb-4 lg:px-8 lg:py-4 tracking-wide font-light",
  };
  return <div className={` ${style[type]}`}>{children}</div>;
};

export default ParaTextSecondary;
