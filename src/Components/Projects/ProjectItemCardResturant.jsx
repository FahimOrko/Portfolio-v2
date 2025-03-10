import React from "react";
import {
  FramerMotionIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../PageIcons";
import HeaderTextSecondary from "../HeaderTextSecondary";
import ParaTextSecondary from "../ParaTextSecondary";
import SkillItemCard from "../Skills/SkillItemCard";
import LinkButton from "../LinkButton";

const ProjectItemCardResturant = () => {
  return (
    <div className="w-full h-[30%] sm:h-[40%] 2xl:h-3/4 2xl:w-1/3 px-4 py-4">
      <div className="flex flex-col items-start justify-between bg-card-bg-dark rounded-lg shadow-lg h-full w-full text-white">
        {/* img  */}
        <div className="rounded-t-lg bg-coming-soon bg-cover bg-no-repeat bg-center h-[50%] md:h-[60%] lg:h-[65%] w-full" />
        {/* cardcontent  */}
        <div className="flex flex-col h-[50%] md:h-[40%] lg:h-[30%] 2xl:h-[50%] w-full text-cosmic-cyan-start px-4 py-4 lg:px-6">
          <HeaderTextSecondary type="projectSection">
            Resturant IO
          </HeaderTextSecondary>
          <div className="flex mb-4 gap-2 flex-wrap">
            <SkillItemCard type="projectSection">
              <ReactIcon className="h-2 w-2 sm:h-3 sm:w-3" />
              <ParaTextSecondary type="proItem">React js</ParaTextSecondary>
            </SkillItemCard>
            <SkillItemCard type="projectSection">
              <ReduxIcon className="h-2 w-2 sm:h-3 sm:w-3" />
              <ParaTextSecondary type="proItem">Redux</ParaTextSecondary>
            </SkillItemCard>
            <SkillItemCard type="projectSection">
              <TailwindIcon className="h-2 w-2 sm:h-3 sm:w-3" />
              <ParaTextSecondary type="proItem">Tailwind Css</ParaTextSecondary>
            </SkillItemCard>
            {/* <SkillItemCard type="projectSection">
              <FramerMotionIcon className="h-2 w-2 sm:h-3 sm:w-3" />
              <ParaTextSecondary type="proItem">
                Framer Motion
              </ParaTextSecondary>
            </SkillItemCard> */}
          </div>
          <ParaTextSecondary type="pro">
            A resutrant app where you can order food
          </ParaTextSecondary>
          <div className=" justify-between py-2 hidden">
            <LinkButton
              type="pro"
              href="https://movie-reviews-website.vercel.app/"
            >
              Live Website
            </LinkButton>
            <LinkButton
              type="pro"
              href="https://github.com/FahimOrko/Movie-reviews-website"
            >
              Live Code
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCardResturant;
