import { motion } from "framer-motion";

const style = {
  white: "text-white",
  teal: "text-teal-300 font-bold",
  cyan: "text-cosmic-cyan-start  font-bold",
};

const DURATION = 0.25;
const STAGGER = 0.025;

const StaggeredText = ({ type, children }) => {
  return (
    <>
      <span className="inline-block md:hidden">
        <span className={`inline-block relative ${style[type]}`}>
          {children}
        </span>
      </span>

      <span className="hidden md:inline-block">
        <motion.span
          initial="initial"
          whileHover="hovered"
          className={`inline-block relative overflow-clip whitespace-nowrap ${style[type]}`}
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
                  className={`inline-block ${style[type]}`}
                >
                  {item}
                </motion.span>
              );
            })}
          </div>
        </motion.span>
      </span>
    </>
  );
};

export default StaggeredText;
