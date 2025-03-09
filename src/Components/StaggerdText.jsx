import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const style = {
  white: "text-white",
  teal: "text-teal-300 font-bold",
};

const DURATION = 0.25;
const STAGGER = 0.025;

const StaggeredText = ({ type, children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Large screens (lg: 1024px+)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.span
      initial="initial"
      whileHover={isLargeScreen ? "hovered" : ""}
      className={`inline-block relative overflow-clip whitespace-nowrap ${style[type]}`}
    >
      <div className={`relative ${style[type]}`}>
        {children.split("").map((item, idx) => (
          <motion.span
            key={idx}
            variants={
              isLargeScreen
                ? { initial: { y: 0 }, hovered: { y: "-100%" } }
                : {}
            }
            transition={{
              duration: DURATION,
              delay: STAGGER * idx,
              ease: "easeInOut",
            }}
            className={`inline-block ${style[type]}`}
          >
            {item}
          </motion.span>
        ))}
      </div>
      {isLargeScreen && (
        <div className={`absolute ${style[type]}`}>
          {children.split("").map((item, idx) => (
            <motion.span
              key={idx}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              transition={{
                duration: DURATION,
                delay: STAGGER * idx,
                ease: "easeInOut",
              }}
              className={`inline-block ${style[type]}`}
            >
              {item}
            </motion.span>
          ))}
        </div>
      )}
    </motion.span>
  );
};

export default StaggeredText;
