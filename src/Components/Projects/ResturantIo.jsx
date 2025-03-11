import React from "react";
import HeaderTextSecondary from "../HeaderTextSecondary";
import SkillItemCard from "../Skills/SkillItemCard";
import {
  FramerMotionIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../PageIcons";
import ParaTextSecondary from "../ParaTextSecondary";
import LinkButton from "../LinkButton";

const ItemCard = () => {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 h-92 px-4 py-4 ">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start bg-card-bg-dark rounded-lg shadow-lg h-[450px] sm:h-80 lg:h-[500px] w-full text-white">
        <div className="rounded-t-lg bg-coming-soon bg-cover bg-no-repeat bg-center h-1/2 sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full" />
        <div className="flex flex-col justify-start h-1/2  sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full text-cosmic-cyan-start px-4 py-4 lg:px-6 ">
          <HeaderTextSecondary type="projectSection">
            Resturant Io
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
            <SkillItemCard type="projectSection">
              <FramerMotionIcon className="h-2 w-2 sm:h-3 sm:w-3" />
              <ParaTextSecondary type="proItem">
                Framer Motion
              </ParaTextSecondary>
            </SkillItemCard>
          </div>
          <div className="flex flex-col justify-between h-full">
            <ParaTextSecondary type="pro">Coming Soon</ParaTextSecondary>
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
    </div>
  );
};

export default ItemCard;
