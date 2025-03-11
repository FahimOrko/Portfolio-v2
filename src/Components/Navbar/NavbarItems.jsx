import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NavbarItems = ({ children, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screens (<=768px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resizes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide tooltip when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsHovered(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <motion.li
      whileHover={!isMobile ? { scale: 1.1 } : {}}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => {
        if (isMobile) setIsHovered(!isHovered);
      }}
      className="relative text-white hover:text-cosmic-cyan-start cursor-pointer flex items-center justify-center"
    >
      {children}

      {isHovered && (
        <motion.p
          initial={{ opacity: 0, x: 10, y: 0 }}
          animate={{ opacity: 1, x: 15, y: -1 }}
          exit={{ opacity: 0, x: 10, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-8 bg-white bg-opacity-10 backdrop-blur-sm text-white  rounded shadow-lg text-sm px-2 py-1"
        >
          {label}
        </motion.p>
      )}
    </motion.li>
  );
};

export default NavbarItems;
