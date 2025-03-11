import React from "react";
import myCv from "/my-cv.pdf";
import StaggerdText from "../StaggerdText";
import HeaderText from "../HeaderText";
import ParaTextSecondary from "../ParaTextSecondary";
import Button from "../Button";

const About = () => {
  const onClick = () => {
    const link = document.createElement("a");
    link.href = myCv;
    link.download = "Fahim-Orko-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section id="about" className="relative h-[120dvh] w-full">
        {/* Image Layer */}
        <div className="absolute inset-0 bg-midnight-dusk-fliped bg-cover bg-left-top bg-no-repeat z-0 " />

        {/* Content */}
        <div className="absolute inset-0 max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto h-[90%] xl:h-[85%] 2xl:h-[100%] flex flex-col items-center justify-end z-20 ">
          <div className="flex flex-col justify-evenly items-center bg-card-bg-dark backdrop-blur-lg rounded-lg w-full py-8 px-4 lg:py-16 lg:px-8 mb-0 lg:mb-20">
            <HeaderText>
              <span className="">
                <StaggerdText type="cyan">A</StaggerdText>{" "}
                <StaggerdText type="cyan">Little</StaggerdText>{" "}
                <StaggerdText type="cyan">About</StaggerdText>{" "}
                <StaggerdText type="cyan">Me</StaggerdText>
              </span>
            </HeaderText>
            <div className="text-white flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-8 lg:gap-6">
              <ParaTextSecondary type="about">
                I'm a <StaggerdText type="cyan">third</StaggerdText> year IT
                student nearing graduation, specializing in{" "}
                <StaggerdText type="cyan">full-stack</StaggerdText> web
                development. Over the years, I've built a strong foundation in
                programming and modern tech stacks, focusing on{" "}
                <StaggerdText type="cyan">React</StaggerdText> for the front end
                and <StaggerdText type="cyan">Express</StaggerdText> with{" "}
                <StaggerdText type="cyan">MongoDB</StaggerdText> for the back
                end. <br /> <br /> With nearly a year of experience in React,
                I'm constantly learning and refining my skills, improving API
                design, enhancing UI creativity, and making systems more
                efficient. <StaggerdText type="cyan">Driven</StaggerdText> and{" "}
                <StaggerdText type="cyan">Ambitious</StaggerdText>, I believe
                hard work leads to{" "}
                <StaggerdText type="cyan">Success</StaggerdText>, and my goal is
                to keep growing and pushing forward in web development.
              </ParaTextSecondary>
            </div>

            <Button onClick={onClick}>Download My CV</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
