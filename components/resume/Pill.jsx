"use client";

import { motion } from "framer-motion";

const Pill = ({ children, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.2 }}
      whileHover={{ 
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        transition: { duration: 0.15 }
      }}
      className="inline-block px-4 py-2 rounded-full text-sm text-white/80 bg-white/5 border border-white/10 cursor-default transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
};

export default Pill;
