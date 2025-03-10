import React from "react";
import { CircleIcon } from "../PageIcons";
import HeaderTextSecondary from "../HeaderTextSecondary";
import ParaTextSecondary from "../ParaTextSecondary";
import StaggeredText from "../StaggerdText";
import LinkButton from "../LinkButton";

const ExpirenceCardRight = ({ workData, num }) => {
  if (workData) {
    return (
      <div className="col-span-1 w-full h-full text-white">
        <div className="flex justify-between w-full h-full">
          <div className="w-2 bg-cosmic-cyan-via item-left flex items-center justify-center">
            <div className="w-fit h-fit px-4 py-2 bg-cosmic-cyan-end rounded-full font-bold text-lg text-white">
              {num}
            </div>
          </div>
          <div className="my-5 lg:mt-0 flex flex-col justify-between w-[90%] bg-card-bg-dark mx-6 px-4 py-6 rounded-lg shadow-lg border-4 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-start md:divide-x-4 divide-cosmic-cyan-end md:items-center mb-4 md:mb-2">
              <HeaderTextSecondary type="expSection">
                <span className="text-cosmic-cyan-start">{workData.title}</span>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSection">
                <span className="text-cosmic-cyan-start">
                  {workData.company}
                </span>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSection">
                <span className="text-cosmic-cyan-start">{workData.date}</span>
              </HeaderTextSecondary>
            </div>
            <div>
              {workData.description?.map((item, idx) => (
                <div
                  className="flex items-start  gap-x-1 px-2 sm:px-4"
                  key={idx}
                >
                  <div className="mt-2">
                    <CircleIcon />
                  </div>
                  <ParaTextSecondary type="exp">{item}</ParaTextSecondary>
                </div>
              ))}
            </div>
            <div className="mt-2">
              {workData.learnMore && (
                <LinkButton type="exp" href={workData.learnMore}>
                  Learn More
                </LinkButton>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-span-1 w-full h-full text-white">
        <div className="flex justify-between w-full h-full">
          <div className="w-2 bg-cosmic-cyan-via item-left flex items-center justify-center">
            <div className="w-fit h-fit px-4 py-2 bg-cosmic-cyan-end rounded-full font-bold text-lg text-white">
              {num}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
};

export default ExpirenceCardRight;
