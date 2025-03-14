import React from "react";
import StaggeredText from "../StaggerdText";
import HeaderText from "../HeaderText";
import ResturantIo from "./ResturantIo";
import MovieReviews from "./MovieReviews";
import Reveal from "../Reveal";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative h-[240dvh] md:h-[180dvh] lg:h-[160dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk-fliped bg-cover bg-right-top bg-no-repeat z-0" />

      {/* content */}
      <div className="absolute inset-0 max-w-[80%] sm:max-w-[90%] mx-auto h-[140dvh] mt-[60dvh] md:h-[120dvh] lg:h-[110dvh] md:mt-[50dvh] lg:mt-[30dvh] bg-red-">
        <div className="flex flex-col h-full w-full items-center justify-start mt-20">
          <span className="uppercase z-50">
            <Reveal>
              <HeaderText type="cyan">
                <StaggeredText>Projects</StaggeredText>{" "}
              </HeaderText>
            </Reveal>
          </span>
          <div className="flex flex-col lg:flex-wrap lg:flex-row w-full h-full ">
            <ResturantIo />
            <MovieReviews />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
