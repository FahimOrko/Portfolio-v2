import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navinfo } from "../../data/navinfo";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NavbarItems from "./NavbarItems";

const sections = ["hero", "about", "skills", "experience", "projects"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [fontsize, setFontSize] = useState("medium");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024); // `lg` breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setFontSize(isSmallScreen ? "small" : "medium");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed z-40 top-[26%] left-4 h-[50dvh] lg:h-[40dvh] w-auto lg:w-fit bg-card-bg-light backdrop-blur-sm shadow-lg rounded-lg">
      <ul className="h-full flex justify-between items-center flex-col px-2 lg:px-4 py-6 gap-y-4">
        {sections.map((section, index) => {
          const icons = [
            HomeIcon,
            InfoIcon,
            LightbulbCircleIcon,
            BusinessCenterIcon,
            AssignmentIcon,
          ];
          const IconComponent = icons[index];

          return (
            <NavbarItems key={section} label={navinfo[index]}>
              <motion.a
                href={`#${section}`}
                className="relative flex items-center"
                initial={{ color: "#ffffff" }}
                animate={{
                  color: activeSection === section ? "#00C9A7" : "#ffffff",
                }}
                whileHover={{ color: "#00C9A7" }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent fontSize={fontsize} />
              </motion.a>
            </NavbarItems>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
