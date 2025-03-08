import { motion } from "framer-motion";
import { useState } from "react";

const NavbarItems = ({ children, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-white cursor-pointer flex items-center justify-center"
    >
      {children}

      {isHovered && (
        <motion.p
          initial={{ opacity: 0, x: 10, y: 0 }}
          animate={{ opacity: 1, x: 15, y: -1 }}
          exit={{ opacity: 0, x: 10, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-8 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded shadow-lg text-sm px-2 py-1"
        >
          {label}
        </motion.p>
      )}
    </motion.li>
  );
};

export default NavbarItems;
