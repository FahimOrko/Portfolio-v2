import { experiences } from "../../data/expirence";
import HeaderText from "../HeaderText";
import Reveal from "../Reveal";
import StaggerdText from "../StaggerdText";
import ExpirenceCardLeft from "./ExpirenceCardLeft";
import ExpirenceCardRight from "./ExpirenceCardRight";

const Expirence = () => {
  const workData = experiences;

  return (
    <section
      id="experience"
      className="relative h-[210dvh] sm:h-[190dvh] md:h-[180dvh] lg:h-[140dvh] xl:h-[120dvh] 2xl:h-[180dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk bg-cover bg-right-bottom bg-no-repeat z-0" />

      {/* content  */}
      <div className="absolute inset-0 max-w-[80%] sm:max-w-[80%] h-[90%] mx-auto mt-10 z-10">
        <Reveal>
          <span className="uppercase ">
            <HeaderText type="cyan">
              <StaggerdText>Expirence</StaggerdText>{" "}
            </HeaderText>
          </span>
        </Reveal>

        <div className="2xl:hidden grid grid-cols-1 grid-rows-3 place-items-center justify-items-center mt-20 sm:mt-10">
          {/* each box */}
          <ExpirenceCardRight workData={workData[0]} num={1} />

          {/* each box */}
          <ExpirenceCardRight workData={workData[1]} num={2} />

          {/* each box */}
          <ExpirenceCardRight workData={workData[2]} num={3} />

          {/* each box */}
        </div>

        {/* large screen  */}

        <div className="hidden 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-3 place-items-center justify-items-center mt-20">
          {/* each box */}
          <ExpirenceCardLeft workData={workData[0]} />

          {/* each box */}
          <ExpirenceCardRight workData={0} num={1} />

          {/* each box */}
          <ExpirenceCardLeft workData={0} />

          {/* each box */}
          <ExpirenceCardRight workData={workData[1]} num={2} />
          {/* each box */}
          <ExpirenceCardLeft workData={workData[2]} />
          {/* each box */}
          <ExpirenceCardRight workData={0} num={3} />
        </div>
      </div>
    </section>
  );
};

export default Expirence;
