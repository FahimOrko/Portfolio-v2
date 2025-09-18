import React from "react";
import HeaderTextSecondary from "../HeaderTextSecondary";
import SkillItemCard from "../Skills/SkillItemCard";
import {
  FramerMotionIcon,
  ReactIcon,
  ReactRouterIcon,
  TailwindIcon,
} from "../PageIcons";
import ParaTextSecondary from "../ParaTextSecondary";
import LinkButton from "../LinkButton";
import Reveal from "../Reveal";
import { SiFormik, SiMapbox, SiReactquery } from "react-icons/si";

const ItemCard = () => {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 px-4 py-4">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start bg-card-bg-dark rounded-lg shadow-lg h-[580px] sm:h-[450px] md:h-[380px] lg:h-[550px] w-full text-white">
        {/* Image/Thumbnail Section */}
        <div className="rounded-t-lg bg-track-finn bg-cover bg-no-repeat bg-center h-[250px] sm:h-full lg:h-[250px] w-full sm:w-1/2 lg:w-full" />

        {/* Content Section */}
        <div className="flex flex-col flex-grow h-1/2 sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full text-cosmic-cyan-start px-4 py-4 lg:px-6">
          {/* Project Title */}
          <Reveal>
            <HeaderTextSecondary type="projectSection">
              Track Finn
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
                <ReactRouterIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                <ParaTextSecondary type="proItem">
                  React Router
                </ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <SiReactquery color="red" />
                <ParaTextSecondary type="proItem">Tan Stack</ParaTextSecondary>
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
              <SkillItemCard type="projectSection">
                <SiMapbox color="grey" />
                <ParaTextSecondary type="proItem">Mapbox</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <SiFormik color="pink" />
                <ParaTextSecondary type="proItem">Formik</ParaTextSecondary>
              </SkillItemCard>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal>
            <div className="flex-grow">
              <ParaTextSecondary type="pro">
                A web application that provides live tracking information for
                trains in Finland. The app allows users to see currently running
                trains on a map, search for trains by type and number, and view
                real-time train details, including location and status.
              </ParaTextSecondary>
            </div>
          </Reveal>

          {/* Buttons - Now Positioned at the Bottom */}
          <div className="mt-auto">
            <Reveal>
              <div className="flex justify-between py-2">
                <LinkButton type="pro" href="https://track-finn.vercel.app/">
                  Live Website
                </LinkButton>
                <LinkButton
                  type="pro"
                  href="https://github.com/FahimOrko/TrackFinn"
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
