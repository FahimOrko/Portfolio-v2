import React from "react";

const HeaderTextSecondary = ({ children }) => {
  return (
    <h2 className="text-center font-semibold text-sm lg:text-lg mb-2 lg:mb-4 tracking-wider">
      {children}
    </h2>
  );
};

export default HeaderTextSecondary;
