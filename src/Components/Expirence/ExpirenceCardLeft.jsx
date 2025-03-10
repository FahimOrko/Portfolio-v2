import React from "react";
import { CircleIcon } from "../PageIcons";
import HeaderTextSecondary from "../HeaderTextSecondary";
import ParaTextSecondary from "../ParaTextSecondary";
import StaggeredText from "../StaggerdText";

const ExpirenceCardLeft = ({ workData, num }) => {
  if (workData) {
    return (
      <div className="col-span-1 w-full h-full text-white">
        <div className="flex justify-between w-full h-full">
          <div className="flex flex-col justify-between w-[90%] bg-card-bg-dark mx-6 px-4 py-6 rounded-lg shadow-lg border-4 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-300">
            <div className="flex justify-start divide-x-4 divide-cosmic-cyan-end items-center">
              <HeaderTextSecondary type="expSection">
                <span className="text-cosmic-cyan-start">{workData.title}</span>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSection">
                <span className="text-cosmic-cyan-start">
                  {workData.company}
                </span>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSectionSecondary">
                <span className="text-cosmic-cyan-start">{workData.date}</span>
              </HeaderTextSecondary>
            </div>
            <div>
              {workData.description?.map((item, idx) => (
                <div
                  className="flex items-center gap-x-1 px-2 sm:px-4"
                  key={idx}
                >
                  <CircleIcon />
                  <ParaTextSecondary type="exp">{item}</ParaTextSecondary>
                </div>
              ))}
            </div>
            <div className="mt-2">
              {workData.learnMore && (
                <a href={workData.learnMore} target="_blank">
                  {" "}
                  <span className="text-xs sm:text-sm lg:text-md px-4 mt-2 underline text-cosmic-cyan-start hover:text-cosmic-cyan-via duration-300 transition-all">
                    {" "}
                    Learn More
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="w-2 bg-cosmic-cyan-via item-left flex items-center justify-center"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-span-1 w-full h-full text-white">
        <div className="flex justify-between w-full h-full">
          <div></div>
          <div className="w-2 bg-cosmic-cyan-via item-left"></div>
        </div>
      </div>
    );
  }
};

export default ExpirenceCardLeft;
