import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden bg-gradient-to-b from-cosmic-cyan-start to-cosmic-cyan-end text-white py-2 lg:py-3 px-4 lg:px-8 text-sm lg:text-lg font-semibold rounded-md transition duration-300 shadow-md hover:shadow-lg hover:from-[#147B80] hover:to-[#0F4F52] hover:text-white"
    >
      {children}
    </motion.button>
  );
};

export default Button;
