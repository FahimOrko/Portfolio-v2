import React from "react";
import {
  AxiosIcon,
  EjsIcon,
  ExpressIcon,
  FramerMotionIcon,
  GitIcon,
  JsIcon,
  MongoDBIcon,
  NodeIcon,
  OpenCVIcon,
  PythonIcon,
  ReactIcon,
  ReactQuerryIcon,
  ReactRouterIcon,
  ReduxIcon,
  SupabaseIcon,
  TailwindIcon,
} from "../PageIcons";
import HeaderText from "../HeaderText";
import ParaTextSecondary from "../ParaTextSecondary";
import SkillItemCard from "./SkillItemCard";
import SkillItemSections from "./SkillItemSections";
import StaggerdText from "../StaggerdText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-[170dvh] sm:h-[140dvh] md:h-[120dvh] lg:h-[90dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk-only bg-cover bg-center z-0" />

      {/* content */}
      <div className="absolute inset-0 max-w-[90%] mx-auto h-[80%] my-auto mx-atuo z-20 ">
        <div className="flex flex-col w-full h-full">
          <span className="mb-10 lg:mb-0 uppercase">
            <HeaderText type="teal">
              <StaggerdText>Tech</StaggerdText>{" "}
              <StaggerdText>Stack</StaggerdText>{" "}
            </HeaderText>
          </span>
          <div className="flex flex-col xl:flex-row items-center justify-evenly h-full w-full z-30 gap-x-4 2xl:gap-x-8 gap-y-4 ">
            {/* forntend  */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <HeaderText type="teal">
                <StaggerdText>Frontend</StaggerdText>
              </HeaderText>
              <SkillItemSections>
                <SkillItemCard type="skillSection">
                  <ReactIcon />
                  <ParaTextSecondary type="skill">React js</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <ReactRouterIcon />
                  <ParaTextSecondary type="skill">
                    React Router
                  </ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <ReduxIcon />
                  <ParaTextSecondary type="skill">Redux</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <ReactQuerryIcon />
                  <ParaTextSecondary type="skill">
                    React Querry
                  </ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <TailwindIcon />
                  <ParaTextSecondary type="skill">
                    Tailwind Css
                  </ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <FramerMotionIcon />
                  <ParaTextSecondary type="skill">
                    Framer Motion
                  </ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <EjsIcon />
                  <ParaTextSecondary type="skill">EJS</ParaTextSecondary>
                </SkillItemCard>
              </SkillItemSections>
            </div>

            {/* Backend */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <HeaderText type="teal">
                <StaggerdText>Backend</StaggerdText>
              </HeaderText>
              <SkillItemSections>
                <SkillItemCard type="skillSection">
                  <NodeIcon />
                  <ParaTextSecondary type="skill">Node js</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <ExpressIcon />
                  <ParaTextSecondary type="skill">Express js</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <MongoDBIcon />
                  <ParaTextSecondary type="skill">Mongo DB</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <SupabaseIcon />
                  <ParaTextSecondary type="skill">SupaBase</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <AxiosIcon />
                  <ParaTextSecondary type="skill">Axios</ParaTextSecondary>
                </SkillItemCard>
              </SkillItemSections>
            </div>

            {/* Others */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <HeaderText type="teal">
                <StaggerdText>Others</StaggerdText>
              </HeaderText>
              <SkillItemSections>
                <SkillItemCard type="skillSection">
                  <PythonIcon />
                  <ParaTextSecondary type="skill">Python</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <JsIcon />
                  <ParaTextSecondary type="skill">Javascript</ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <GitIcon />
                  <ParaTextSecondary type="skill">
                    Version Control
                  </ParaTextSecondary>
                </SkillItemCard>
                <SkillItemCard type="skillSection">
                  <OpenCVIcon />
                  <ParaTextSecondary type="skill">Open CV</ParaTextSecondary>
                </SkillItemCard>
              </SkillItemSections>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
