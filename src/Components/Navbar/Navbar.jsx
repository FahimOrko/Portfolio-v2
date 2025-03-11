import { navinfo } from "../../data/navinfo";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContactsIcon from "@mui/icons-material/Contacts";
import NavbarItems from "./NavbarItems";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [fontsize, setFontSize] = useState("medium");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024); // `lg` breakpoint

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 1024);
    };

    isSmallScreen ? setFontSize("small") : setFontSize("medium");

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  return (
    <nav className="fixed z-50 top-[26%] left-4 h-[50dvh] lg:h-[40dvh] w-auto lg:w-fit bg-card-bg-light backdrop-blur-sm shadow-lg rounded-lg ">
      <ul className="h-full flex justify-between items-center flex-col px-2 lg:px-4 py-6 gap-y-4">
        <NavbarItems label={navinfo[0]}>
          <a href="#hero">
            <HomeIcon fontSize={fontsize} />
          </a>
        </NavbarItems>

        <NavbarItems label={navinfo[1]}>
          <a href="#about">
            <InfoIcon fontSize={fontsize} />
          </a>
        </NavbarItems>

        <NavbarItems label={navinfo[2]}>
          <a href="#skills">
            <LightbulbCircleIcon fontSize={fontsize} />
          </a>
        </NavbarItems>

        <NavbarItems label={navinfo[3]}>
          <a href="#expirence">
            <BusinessCenterIcon fontSize={fontsize} />
          </a>
        </NavbarItems>

        <NavbarItems label={navinfo[4]}>
          <a href="#projects">
            <AssignmentIcon fontSize={fontsize} />
          </a>
        </NavbarItems>
      </ul>
    </nav>
  );
};

export default Navbar;
