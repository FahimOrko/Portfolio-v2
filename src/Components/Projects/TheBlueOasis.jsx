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
import { SiFormik, SiMapbox, SiNextdotjs, SiReactquery } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";

const ItemCard = () => {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 px-4 py-4">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start bg-card-bg-dark rounded-lg shadow-lg h-[580px] sm:h-[450px] md:h-[380px] lg:h-[550px] w-full text-white">
        {/* Image/Thumbnail Section */}
        <div className="rounded-t-lg bg-the-blue-oasis bg-cover bg-no-repeat bg-center h-[250px] sm:h-full lg:h-[250px] w-full sm:w-1/2 lg:w-full" />

        {/* Content Section */}
        <div className="flex flex-col flex-grow h-1/2 sm:h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full text-cosmic-cyan-start px-4 py-4 lg:px-6">
          {/* Project Title */}
          <Reveal>
            <HeaderTextSecondary type="projectSection">
              The Blue Oasis
            </HeaderTextSecondary>
          </Reveal>

          {/* Tech Stack Icons */}
          <Reveal>
            <div className="flex mb-4 gap-2 flex-wrap mt-2">
              <SkillItemCard type="projectSection">
                <SiNextdotjs color="cyan" />
                <ParaTextSecondary type="proItem">Next js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard type="projectSection">
                <TbBrandOauth color="gray" />
                <ParaTextSecondary type="proItem">Next Auth</ParaTextSecondary>
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
                <RiSupabaseFill color="green" />
                <ParaTextSecondary type="proItem">Supabase</ParaTextSecondary>
              </SkillItemCard>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal>
            <div className="flex-grow">
              <ParaTextSecondary type="pro">
                A web application for booking cottages that allows users to
                securely create accounts, log in, and manage their sessions. The
                app enables users to check real-time availability, make
                bookings, and view their reservations. It features an intuitive,
                responsive interface designed with Tailwind CSS, while front-end
                routing, state management, and data fetching are handled
                efficiently using Next.js and Supabase.
              </ParaTextSecondary>
            </div>
          </Reveal>

          {/* Buttons - Now Positioned at the Bottom */}
          <div className="mt-auto">
            <Reveal>
              <div className=" justify-between py-2 hidden">
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
