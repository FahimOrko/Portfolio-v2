import React from "react";
import myCv from "/my-cv.pdf";
import StaggerdText from "../StaggerdText";
import HeaderText from "../HeaderText";
import ParaTextSecondary from "../ParaTextSecondary";
import Button from "../Button";

const About = () => {
  return (
    <>
      <section id="about" className="relative h-[100dvh] w-full">
        {/* Image Layer */}
        <div className="absolute inset-0 bg-midnight-dusk-fliped bg-cover bg-left-top bg-no-repeat z-0 " />

        {/* Content */}
        <div className="absolute inset-0 max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto h-[90%] xl:h-[85%] 2xl:h-[100%] flex flex-col items-center justify-end z-20 ">
          <div className="flex flex-col justify-evenly items-center bg-card-bg-light backdrop-blur-lg rounded-lg w-full py-8 px-4 lg:py-16 lg:px-8 mb-0 lg:mb-20">
            <HeaderText>
              <span className="">
                <StaggerdText type="teal">A</StaggerdText>{" "}
                <StaggerdText type="teal">Little</StaggerdText>{" "}
                <StaggerdText type="teal">About</StaggerdText>{" "}
                <StaggerdText type="teal">Me</StaggerdText>
              </span>
            </HeaderText>
            <div className="text-white flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-8 lg:gap-6">
              <ParaTextSecondary type="about">
                I'm a <StaggerdText type="teal">third</StaggerdText> year IT
                student nearing graduation, specializing in{" "}
                <StaggerdText type="teal">full-stack</StaggerdText> web
                development. Over the years, I've built a strong foundation in
                programming and modern tech stacks, focusing on{" "}
                <StaggerdText type="teal">React</StaggerdText> for the front end
                and <StaggerdText type="teal">Express</StaggerdText> with{" "}
                <StaggerdText type="teal">MongoDB</StaggerdText> for the back
                end. <br /> <br /> With nearly a year of experience in React,
                I'm constantly learning and refining my skills, improving API
                design, enhancing UI creativity, and making systems more
                efficient. <StaggerdText type="teal">Driven</StaggerdText> and{" "}
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
      </section>
    </>
  );
};

export default About;
