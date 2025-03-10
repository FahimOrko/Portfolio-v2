import React from "react";
import StaggeredText from "../StaggerdText";
import HeaderText from "../HeaderText";
import ProjectItemCardMovieReviews from "./ProjectItemCardMovieReviews";
import ProjectItemCardResturant from "./ProjectItemCardResturant";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative h-[350dvh] 2xl:h-[160dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk-fliped bg-cover bg-right-top bg-no-repeat z-0" />
      {/* content */}
      <div className="absolute inset-0 max-w-[80%] sm:max-w-[80%] h-[90%] mx-auto ">
        <div className="flex flex-col h-full w-full items-center justify-end mt-20">
          <span className="uppercase">
            <HeaderText type="cyan">
              <StaggeredText>Projects</StaggeredText>{" "}
            </HeaderText>
          </span>
          <div className="flex flex-col 2xl:flex-row w-full  h-[60%]">
            <ProjectItemCardMovieReviews />
            <ProjectItemCardResturant />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
