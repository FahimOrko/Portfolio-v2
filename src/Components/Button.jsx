import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Button = ({ onClick, children }) => {
  return (
    <Reveal>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="relative h-22 w-fit overflow-hidden bg-gradient-to-b from-cosmic-cyan-start to-cosmic-cyan-end text-white py-2 lg:py-3 px-4 lg:px-8 text-sm lg:text-lg font-semibold rounded-md transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:from-[#147B80] hover:to-[#0F4F52] hover:text-white"
      >
        {children}
      </motion.button>
    </Reveal>
  );
};

export default Button;
