import { experiences } from "../../data/expirence";
import HeaderText from "../HeaderText";
import HeaderTextSecondary from "../HeaderTextSecondary";
import { CircleIcon } from "../PageIcons";
import ParaTextSecondary from "../ParaTextSecondary";
import StaggerdText from "../StaggerdText";
import ExpirenceCardLeft from "./ExpirenceCardLeft";
import ExpirenceCardRight from "./ExpirenceCardRight";

const Expirence = () => {
  const workData = experiences;

  return (
    <section
      id="expirence"
      className="relative h-[230dvh] sm:h-[180dvh] md:h-[160dvh] w-full"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk bg-cover bg-right-bottom bg-no-repeat z-0" />

      {/* content  */}
      <div className="absolute inset-0 max-w-[80%] sm:max-w-[80%] h-[90%] mx-auto mt-10">
        <HeaderText type="teal">
          <StaggerdText>Expirence</StaggerdText>{" "}
        </HeaderText>

        <div className="xl:hidden grid grid-cols-1 grid-rows-3 place-items-center justify-items-center mt-20">
          {/* each box */}
          <ExpirenceCardRight workData={workData[0]} num={1} />

          {/* each box */}
          <ExpirenceCardRight workData={workData[1]} num={2} />

          {/* each box */}
          <ExpirenceCardRight workData={workData[2]} num={3} />

          {/* each box */}
        </div>

        {/* large screen  */}

        <div className="hidden xl:grid xl:grid-cols-2 xl:grid-rows-3 place-items-center justify-items-center mt-20">
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
