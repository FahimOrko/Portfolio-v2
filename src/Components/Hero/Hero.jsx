import "../../index.css";
import videoBg from "/HeroBg.mp4";
import Button from "../Button";
import StaggerdText from "../StaggerdText";
import HeaderText from "../HeaderText";
import HeaderTextSecondary from "../HeaderTextSecondary";
import ParaText from "../ParaText";
import ParaTextSecondary from "../ParaTextSecondary";

const Hero = () => {
  const onClick = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = element.getBoundingClientRect().height / 2; // Get half of the element's height
      window.scrollTo({
        top: element.offsetTop - window.innerHeight / 2 + offset, // Adjust to center it
        behavior: "smooth",
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:fahimorko4122@gmail.com?subject=Inquiry&body=Hello,";
  };

  return (
    <section id="hero">
      {/* bg video  */}
      <video
        src={videoBg}
        alt=""
        autoPlay
        muted
        loop
        playsInline
        className="relative min-w-full h-[100dvh] object-cover object-center z-1 blur-sm opacity-80"
      />

      {/* content  */}
      <div className="h-[100dvh] w-full absolute top-0">
        <div className="max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto h-full flex items-center">
          <div className="flex flex-col-reverse lg:flex-row justify-stretch items-center bg-slate-700  bg-opacity-30 backdrop-blur-lg rounded-lg w-full py-6 px-3 lg:py-10 lg:px-6">
            <div className="w-full text-white">
              <HeaderText>
                Hi, I'm <StaggerdText type="teal">Fahim</StaggerdText>{" "}
                <StaggerdText type="teal">Abrar</StaggerdText>{" "}
                <StaggerdText type="teal">Orko</StaggerdText>
              </HeaderText>
              <HeaderTextSecondary type="heroSection">
                A Full-Stack Web Developer
              </HeaderTextSecondary>
              <ParaText>Based in Finland</ParaText>
              <ParaTextSecondary type="hero">
                I specialize in{" "}
                <StaggerdText type="teal"> React.js</StaggerdText> for front-end
                and <StaggerdText type="teal"> Express.js</StaggerdText> with{" "}
                <StaggerdText type="teal"> MongoDB</StaggerdText> for back-end,
                creating scalable and user-friendly web applications.
              </ParaTextSecondary>
              <div className="flex items-center justify-center gap-x-3 lg:gap-x-6 mb-4 lg:mb-8">
                <Button onClick={onClick}>View my work</Button>
                <Button onClick={handleEmailClick}>Contact Me</Button>
              </div>
            </div>
            <div className="w-full flex justify-center py-6 lg:py-10 place-items-start lg:place-items-end">
              <img
                src="/PersonalPhoto.png"
                alt="Profile"
                className="w-[30dvh] h-[30dvh] lg:w-[40dvh] lg:h-[40dvh] object-top object-cover shadow-lg rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
