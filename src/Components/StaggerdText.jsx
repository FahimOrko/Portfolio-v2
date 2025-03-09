import { motion } from "framer-motion";

const style = {
  white: "text-whtie",
  teal: "text-teal-300 font-bold",
};

const DURATION = 0.25;
const STAGGER = 0.025;

const StaggerdText = ({ type, children }) => {
  return (
    <motion.span
      initial="initail"
      whileHover="hovered"
      className={`inline-block relative overflow-clip whitespace-nowrap  ${style[type]}`}
    >
      <div className={`relative ${style[type]}`}>
        {children.split("").map((item, idx) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                delay: STAGGER * idx,
                ease: "easeInOut",
              }}
              key={idx}
              className={`inline-block ${style[type]}`}
            >
              {item}
            </motion.span>
          );
        })}
      </div>
      <div className={`absolute ${style[type]}`}>
        {children.split("").map((item, idx) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                delay: STAGGER * idx,
                ease: "easeInOut",
              }}
              key={idx}
              className={`inline-block ${style[type]} `}
            >
              {item}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default StaggerdText;
