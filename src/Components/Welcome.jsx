import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide overlay immediately after loading bar completes (2s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2s for loading, then fade-out starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Fade out lasts 1s
          className="fixed inset-0 flex flex-col items-center justify-center px-4 bg-card-bg-dark text-cosmic-cyan-start font-bold text-4xl md:text-6xl lg:text-7xl text-center z-50"
        >
          <div>Welcome!</div>
          {/* Responsive Loading Bar */}
          <div className="mt-4 h-2 w-[90%] max-w-md bg-gray-700 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="h-full bg-cosmic-cyan-start"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;
