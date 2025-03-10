import React from "react";

const HeaderTextSecondary = ({ type, children }) => {
  const style = {
    heroSection:
      "text-center font-semibold text-sm lg:text-lg mb-2 lg:mb-4 tracking-wider",
    expSection:
      "font-semibold text-sm sm:text-base lg:text-2xl mb-2 lg:mb-4 tracking-wider px-2 lg:px-4",
    projectSection:
      "font-semibold text-xs sm:text-sm lg:text-base mb-2 lg:mb-4 tracking-wider",
  };
  return <h2 className={`${style[type]}`}>{children}</h2>;
};

export default HeaderTextSecondary;
