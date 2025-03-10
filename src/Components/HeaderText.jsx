import React from "react";

const HeaderText = ({ type, children }) => {
  const style = {
    teal: "text-teal-300 font-bold",
    white: "text-white font-bold",
    cyan: "text-cosmic-cyan-start font-bold",
  };
  return (
    <h1
      className={`text-center text-2xl lg:text-4xl font-bold py-2 mb-2 lg:mb-4 lg:py-4 tracking-wide overflow-hidden ${style[type]}`}
    >
      {children}
    </h1>
  );
};

export default HeaderText;
