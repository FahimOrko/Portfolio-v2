import React from "react";

const LinkButton = ({ type, href, children }) => {
  const style = {
    exp: "text-xs sm:text-sm lg:text-md px-4 mt-2 underline text-cosmic-cyan-start hover:text-cosmic-cyan-via duration-300 transition-all",
    pro: "text-xs sm:text-sm lg:text-md underline text-cosmic-cyan-start hover:text-cosmic-cyan-via duration-300 transition-all",
  };
  return (
    <a href={href} target="_blank">
      {" "}
      <span className={`${style[type]}`}> {children}</span>
    </a>
  );
};

export default LinkButton;
