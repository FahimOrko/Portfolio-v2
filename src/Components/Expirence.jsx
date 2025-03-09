import HeaderText from "./HeaderText";
import StaggerdText from "./StaggerdText";

const Expirence = () => {
  return (
    <div id="expirence" className="relative h-[100dvh] w-full">
      {/* Image Layer */}
      <div className="absolute inset-0 bg-midnight-dusk bg-cover bg-right-bottom bg-no-repeat z-0" />

      {/* content  */}
      <div className="absolute inset-0 max-w-[90%] h-[80%] mx-auto bg-red-400 mt-10">
        <HeaderText type="teal">
          <StaggerdText>Expirence</StaggerdText>{" "}
        </HeaderText>
        {/* horizontal verion  */}
      </div>
    </div>
  );
};

export default Expirence;
