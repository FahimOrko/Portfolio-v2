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
import Reveal from "../Reveal";

const ItemCard = () => {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 h-92 px-4 py-4 ">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start bg-card-bg-dark rounded-lg shadow-lg h-[450px] sm:h-80 lg:h-[500px] w-full text-white">
        <div className="rounded-t-lg bg-movie-reviews bg-cover bg-no-repeat bg-center h-1/2 sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full" />
        <div className="flex flex-col justify-start h-1/2  sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full text-cosmic-cyan-start px-4 py-4 lg:px-6 ">
          <Reveal>
            <HeaderTextSecondary type="projectSection">
              Movie Reviews
            </HeaderTextSecondary>
          </Reveal>
          <Reveal>
            <div className="flex mb-4 gap-2 flex-wrap">
              <SkillItemCard type="projectSection">
                <ReactIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">React js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <FramerMotionIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">
                  Framer Motion
                </ParaTextSecondary>
              </SkillItemCard>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-between h-full">
              <ParaTextSecondary type="pro">
                This React-based movie search and watchlist app utilizes the
                OMDB API, allowing users to search for movies, view details, add
                them to a watchlist, rate watched movies, and manage their
                selections seamlessly.
              </ParaTextSecondary>
              <div className="flex justify-between py-2">
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
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
