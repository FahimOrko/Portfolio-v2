import React from "react";

const HeaderText = ({ children }) => {
  return (
    <h1 className="text-center text-lg lg:text-4xl font-bold py-2 mb-2 lg:mb-4 lg:py-4 tracking-wide overflow-hidden">
      {children}
    </h1>
  );
};

export default HeaderText;
