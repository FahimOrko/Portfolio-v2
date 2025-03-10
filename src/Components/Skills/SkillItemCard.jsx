import React from "react";

const SkillItemCard = ({ children }) => {
  return (
    <div className="flex w-fit h-fit px-2 py-1 items-center justify-center rounded-lg shadow-lg uppercase bg-zinc-950 border-4 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-200 ease-in-out">
      {children}
    </div>
  );
};

export default SkillItemCard;
