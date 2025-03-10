import React from "react";

const SkillItemCard = ({ type, children }) => {
  const style = {
    skillSection:
      "flex w-fit h-fit px-2 py-1 items-center justify-center rounded-lg shadow-lg uppercase bg-zinc-950 border-4 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-200 ease-in-out",
    projectSection:
      "flex w-fit h-fit px-1 py-.5 items-center justify-center rounded-lg shadow-lg uppercase bg-zinc-950 border-2 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-200 ease-in-out",
  };
  return <div className={`${style[type]}`}>{children}</div>;
};

export default SkillItemCard;
