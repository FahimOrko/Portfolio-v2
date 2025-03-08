import React from "react";
import myCv from "/my-cv.pdf";
import StaggerdText from "./StaggerdText";
import HeaderText from "./HeaderText";
import ParaTextSecondary from "./ParaTextSecondary";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative h-[100dvh] w-full bg-red-100 bg-about-img bg-cover bg-center"
      >
        {/* Image Layer */}
        <div className="absolute inset-0 bg-about-img bg-cover bg-center z-0" />

        {/* Backdrop Blur Layer */}
        <div className="absolute bg-transparent opacity-70 inset-0 backdrop-blur-md z-10" />

        {/* Content */}
        <div className="absolute inset-0 max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto h-full flex flex-col items-center justify-center z-20">
          <div className="flex flex-col justify-evenly items-center bg-slate-700 bg-opacity-30 backdrop-blur-lg rounded-lg w-full py-8 px-4 lg:py-16 lg:px-8">
            <HeaderText>
              <span className="uppercase">
                <StaggerdText type="teal">A</StaggerdText>{" "}
                <StaggerdText type="teal">Little</StaggerdText>{" "}
                <StaggerdText type="teal">About</StaggerdText>{" "}
                <StaggerdText type="teal">Me</StaggerdText>
              </span>
            </HeaderText>
            <div className="text-white flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-10 lg:gap-6">
              <ParaTextSecondary type="about">
                I'm a <StaggerdText type="teal">third</StaggerdText> year IT
                student nearing graduation, specializing in{" "}
                <StaggerdText type="teal">full-stack</StaggerdText> web
                development. Over the years, I've built a strong foundation in
                programming and modern tech stacks, focusing on{" "}
                <StaggerdText type="teal">React</StaggerdText> for the front end
                and <StaggerdText type="teal">Express</StaggerdText> with{" "}
                <StaggerdText type="teal">MongoDB</StaggerdText> for the back
                end.
              </ParaTextSecondary>

              <ParaTextSecondary type="about">
                With nearly a year of experience in React, I'm constantly
                learning and refining my skills, improving API design, enhancing
                UI creativity, and making systems more efficient.{" "}
                <StaggerdText type="teal">Driven</StaggerdText> and{" "}
                <StaggerdText type="teal">Ambitious</StaggerdText>, I believe
                hard work leads to{" "}
                <StaggerdText type="teal">Success</StaggerdText>, and my goal is
                to keep growing and pushing forward in web development.
              </ParaTextSecondary>
            </div>

            <Button>
              <a href={myCv} download="Fahim-Orko-CV.pdf">
                Download My CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
