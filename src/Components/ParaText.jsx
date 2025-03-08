import React from "react";

const ParaText = ({ children }) => {
  return (
    <div className="text-center text-xs lg:text-lg text-slate-200 mb-3 lg:mb-4">
      {children}
    </div>
  );
};

export default ParaText;
