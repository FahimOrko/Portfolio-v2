import React from "react";
import HeaderTextSecondary from "../HeaderTextSecondary";
import SkillItemCard from "../Skills/SkillItemCard";
import {
  FramerMotionIcon,
  ReactIcon,
  ReactRouterIcon,
  ReduxIcon,
  TailwindIcon,
} from "../PageIcons";
import ParaTextSecondary from "../ParaTextSecondary";
import LinkButton from "../LinkButton";
import Reveal from "../Reveal";

const ItemCard = () => {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 px-4 py-4">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start bg-card-bg-dark rounded-lg shadow-lg h-[580px] sm:h-[450px] md:h-[380px] lg:h-[550px] w-full text-white">
        {/* Image Section */}
        <div className="rounded-t-lg bg-resturant-io bg-cover bg-no-repeat bg-center h-[250px] sm:h-full lg:h-[250px] w-full sm:w-1/2 lg:w-full" />

        {/* Content Section */}
        <div className="flex flex-col flex-grow h-1/2 sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full text-cosmic-cyan-start px-4 py-4 lg:px-6">
          {/* Project Title */}
          <Reveal>
            <HeaderTextSecondary type="projectSection">
              Restaurant Io
            </HeaderTextSecondary>
          </Reveal>

          {/* Tech Stack Icons */}
          <Reveal>
            <div className="flex mb-4 gap-2 flex-wrap mt-2">
              <SkillItemCard type="projectSection">
                <ReactIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">React.js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <ReduxIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">Redux</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <ReactRouterIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">
                  React Router
                </ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <TailwindIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">
                  Tailwind CSS
                </ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <FramerMotionIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">
                  Framer Motion
                </ParaTextSecondary>
              </SkillItemCard>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal>
            <div className="flex-grow">
              <ParaTextSecondary type="pro">
                This React-based restaurant app lets users order pizzas,
                generates a unique order ID, and allows order tracking. It
                leverages Redux for state management, Tailwind CSS for styling,
                and React Router for navigation, providing a seamless ordering
                experience.
              </ParaTextSecondary>
            </div>
          </Reveal>

          {/* Buttons - Always at the Bottom */}
          <div className="mt-auto">
            <Reveal>
              <div className="flex justify-between py-2">
                <LinkButton type="pro" href="https://resturant-io.vercel.app/">
                  Live Website
                </LinkButton>
                <LinkButton
                  type="pro"
                  href="https://github.com/FahimOrko/Resturant-IO"
                >
                  Live Code
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
