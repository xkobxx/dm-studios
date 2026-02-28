"use client";

import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`mb-8 ${alignClasses[align]}`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-base">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
