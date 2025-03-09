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
} from "./PageIcons";
import HeaderText from "./HeaderText";
import ParaTextSecondary from "./ParaTextSecondary";
import SkillItemCard from "./SkillItemCard";
import SkillItemSections from "./SkillItemSections";
import StaggerdText from "./StaggerdText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-[170dvh] sm:h-[140dvh] md:h-[100dvh] lg:h-[70dvh] xl:h-[40dvh] 2xl:h-[60dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk-only bg-cover bg-center z-0" />

      {/* content */}
      <div className="absolute inset-0 max-w-[90%] mx-auto h-[80%] my-auto mx-atuo z-20 ">
        <div className="flex flex-col xl:flex-row items-center justify-evenly h-full w-full z-30 gap-x-4 2xl:gap-x-8 gap-y-4 ">
          {/* forntend  */}
          <div className="flex flex-col justify-stretch bg-card-bg-dark backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%] rounded-lg shadow-lg px-6 py-2">
            <HeaderText type="teal">
              <StaggerdText>Frontend</StaggerdText>
            </HeaderText>
            <SkillItemSections>
              <SkillItemCard>
                <ReactIcon />
                <ParaTextSecondary type="skill">React js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <ReactRouterIcon />
                <ParaTextSecondary type="skill">React Router</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <ReduxIcon />
                <ParaTextSecondary type="skill">Redux</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <ReactQuerryIcon />
                <ParaTextSecondary type="skill">React Querry</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <TailwindIcon />
                <ParaTextSecondary type="skill">Tailwind Css</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <FramerMotionIcon />
                <ParaTextSecondary type="skill">
                  Framer Motion
                </ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <EjsIcon />
                <ParaTextSecondary type="skill">EJS</ParaTextSecondary>
              </SkillItemCard>
            </SkillItemSections>
          </div>

          {/* Backend */}
          <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]   rounded-lg shadow-lg px-6 py-2">
            <HeaderText type="teal">
              <StaggerdText>Backend</StaggerdText>
            </HeaderText>
            <SkillItemSections>
              <SkillItemCard>
                <NodeIcon />
                <ParaTextSecondary type="skill">Node js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <ExpressIcon />
                <ParaTextSecondary type="skill">Express js</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <MongoDBIcon />
                <ParaTextSecondary type="skill">Mongo DB</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <SupabaseIcon />
                <ParaTextSecondary type="skill">SupaBase</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
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
              <SkillItemCard>
                <PythonIcon />
                <ParaTextSecondary type="skill">Python</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <JsIcon />
                <ParaTextSecondary type="skill">Javascript</ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <GitIcon />
                <ParaTextSecondary type="skill">
                  Version Control
                </ParaTextSecondary>
              </SkillItemCard>
              <SkillItemCard>
                <OpenCVIcon />
                <ParaTextSecondary type="skill">Open CV</ParaTextSecondary>
              </SkillItemCard>
            </SkillItemSections>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
