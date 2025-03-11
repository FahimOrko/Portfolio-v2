import React from "react";
import { CircleIcon } from "../PageIcons";
import HeaderTextSecondary from "../HeaderTextSecondary";
import ParaTextSecondary from "../ParaTextSecondary";
import StaggeredText from "../StaggerdText";
import LinkButton from "../LinkButton";
import Reveal from "../Reveal";

const ExpirenceCardLeft = ({ workData, num }) => {
  if (workData) {
    return (
      <div className="col-span-1 w-full h-full text-white">
        <div className="flex justify-between w-full h-full">
          <div className="flex flex-col justify-between w-[90%] bg-card-bg-dark mx-6 px-4 py-6 rounded-lg shadow-lg border-4 border-cosmic-cyan-start hover:border-cosmic-cyan-end transition-all duration-300">
            <div className="flex justify-start divide-x-4 divide-cosmic-cyan-end items-center">
              <HeaderTextSecondary type="expSection">
                <Reveal>
                  <span className="text-cosmic-cyan-start">
                    {workData.title}
                  </span>
                </Reveal>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSection">
                <Reveal>
                  <span className="text-cosmic-cyan-start">
                    {workData.company}
                  </span>
                </Reveal>
              </HeaderTextSecondary>
              <HeaderTextSecondary type="expSection">
                <Reveal>
                  <span className="text-cosmic-cyan-start">
                    {workData.date}
                  </span>
                </Reveal>
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
                  <Reveal>
                    <ParaTextSecondary type="exp">{item}</ParaTextSecondary>
                  </Reveal>
                </div>
              ))}
            </div>

            <div className="mt-2">
              {workData.learnMore && (
                <Reveal>
                  <LinkButton type="exp" href={workData.learnMore}>
                    Learn More
                  </LinkButton>
                </Reveal>
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
