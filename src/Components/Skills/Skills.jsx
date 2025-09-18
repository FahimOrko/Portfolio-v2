import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiCypress,
  SiExpress,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiOpencv,
  SiPython,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSocketdotio,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import HeaderText from "../HeaderText";
import ParaTextSecondary from "../ParaTextSecondary";
import Reveal from "../Reveal";
import StaggerdText from "../StaggerdText";
import SkillItemCard from "./SkillItemCard";
import SkillItemSections from "./SkillItemSections";

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
            <Reveal>
              <HeaderText type="teal">
                <StaggerdText>Tech</StaggerdText>{" "}
                <StaggerdText>Stack</StaggerdText>{" "}
              </HeaderText>
            </Reveal>
          </span>
          <div className="flex flex-col xl:flex-row items-center justify-evenly h-full w-full z-30 gap-x-4 2xl:gap-x-8 gap-y-4 ">
            {/* forntend  */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <Reveal>
                <HeaderText type="teal">
                  <StaggerdText>Frontend</StaggerdText>
                </HeaderText>
              </Reveal>
              <Reveal>
                <SkillItemSections>
                  <SkillItemCard type="skillSection">
                    <FaReact color="cyan" />
                    <ParaTextSecondary type="skill">React js</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <RiNextjsFill color="grey" />
                    <ParaTextSecondary type="skill">Next JS</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiReactrouter color="red" />
                    <ParaTextSecondary type="skill">
                      React Router
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiRedux color="cyan" />
                    <ParaTextSecondary type="skill">Redux</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiReactquery color="purple" />
                    <ParaTextSecondary type="skill">
                      Tan Stack
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <RiTailwindCssFill color="cyan" />
                    <ParaTextSecondary type="skill">
                      Tailwind Css
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <TbBrandFramerMotion color="pink" />
                    <ParaTextSecondary type="skill">
                      Framer Motion
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiJest color="red" />
                    <ParaTextSecondary type="skill">Jest</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiCypress color="gray" />
                    <ParaTextSecondary type="skill">Cypress</ParaTextSecondary>
                  </SkillItemCard>
                </SkillItemSections>
              </Reveal>
            </div>

            {/* Backend */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <Reveal>
                <HeaderText type="teal">
                  <StaggerdText>Backend</StaggerdText>
                </HeaderText>
              </Reveal>
              <Reveal>
                <SkillItemSections>
                  <SkillItemCard type="skillSection">
                    <FaNodeJs color="green" />
                    <ParaTextSecondary type="skill">Node js</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiExpress color="green" />
                    <ParaTextSecondary type="skill">
                      Express js
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiMongodb color="green" />
                    <ParaTextSecondary type="skill">Mongo DB</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiSupabase color="cyan" />
                    <ParaTextSecondary type="skill">SupaBase</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiAxios color="purple" />
                    <ParaTextSecondary type="skill">Axios</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiJest color="red" />
                    <ParaTextSecondary type="skill">Jest</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiGraphql color="pink" />
                    <ParaTextSecondary type="skill">GraphQL</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiSocketdotio color="gray" />
                    <ParaTextSecondary type="skill">
                      Socket IO
                    </ParaTextSecondary>
                  </SkillItemCard>
                </SkillItemSections>
              </Reveal>
            </div>

            {/* Others */}
            <div className="flex flex-col justify-stretch bg-card-bg-dark  backdorp-blur-lg w-[95%] h-[60%] md:w-[80%] md:h-[30%] lg:w-[90%] lg:h-[90%] xl:h-[60%]  rounded-lg shadow-lg px-6 py-2">
              <Reveal>
                <HeaderText type="teal">
                  <StaggerdText>Others</StaggerdText>
                </HeaderText>
              </Reveal>
              <Reveal>
                <SkillItemSections>
                  <SkillItemCard type="skillSection">
                    <SiPython color="yellow" />
                    <ParaTextSecondary type="skill">Python</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiJavascript color="yellow" />
                    <ParaTextSecondary type="skill">
                      Javascript
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiTypescript color="blue" />
                    <ParaTextSecondary type="skill">
                      TypeScript
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <FaGitAlt color="orange" />
                    <ParaTextSecondary type="skill">
                      Version Control
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiGithubactions color="pink" />
                    <ParaTextSecondary type="skill">
                      Github Actions
                    </ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <FaDocker color="teal" />
                    <ParaTextSecondary type="skill">Docker</ParaTextSecondary>
                  </SkillItemCard>
                  <SkillItemCard type="skillSection">
                    <SiOpencv color="cyan" />
                    <ParaTextSecondary type="skill">Open CV</ParaTextSecondary>
                  </SkillItemCard>
                </SkillItemSections>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
