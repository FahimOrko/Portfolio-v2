import React from "react";
import videoBg from "/AboutBg.mp4";
import StaggerdText from "./StaggerdText";
import HeaderText from "./HeaderText";

const About = () => {
  return (
    <>
      <div className="relative min-w-full h-[100dvh]">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-center object-cover z-1 blur-sm opacity-60"
        />
        <div id="about" className="h-[100dvh] w-full absolute inset-0">
          <div className="max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto h-full flex items-center">
            <div className="flex flex-col justify-stretch items-center bg-slate-700 bg-opacity-30 backdrop-blur-lg rounded-lg w-full py-6 px-3 lg:py-10 lg:px-6">
              <HeaderText>
                <span className="uppercase">
                  <StaggerdText type="teal">A</StaggerdText>{" "}
                  <StaggerdText type="teal">Little</StaggerdText>{" "}
                  <StaggerdText type="teal">About</StaggerdText>{" "}
                  <StaggerdText type="teal">Me</StaggerdText>
                </span>
              </HeaderText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
