import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ width = "fit-content", type, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  if (type === "hero")
    return (
      <div ref={ref} className={`relative ${width} overflow-hidden`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 2.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 top-4 bottom-4 z-40 bg-cosmic-cyan-start rounded-sm shadow-lg"
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn", delay: 2 }}
        />
      </div>
    );

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 top-4 bottom-4 z-40 bg-cosmic-cyan-start rounded-sm shadow-lg"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;
