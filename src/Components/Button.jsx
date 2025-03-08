import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button className="bg-gradient-to-r uppercase from-blue-500 to-teal-500 text-white py-1 lg:py-2 px-2 lg:px-6 text-xs lg:text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300">
      <p>{children}</p>
    </motion.button>
  );
};

export default Button;
