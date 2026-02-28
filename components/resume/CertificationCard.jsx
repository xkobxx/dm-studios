"use client";

import { motion } from "framer-motion";
import { FiAward, FiCalendar } from "react-icons/fi";

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-200">
          <FiAward className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-medium text-white group-hover:text-accent/80 transition-colors duration-200">
            {cert.name}
          </h4>
          <p className="text-sm text-white/60 mt-0.5">{cert.issuer}</p>
          <div className="flex items-center gap-1.5 mt-2 text-white/40 text-xs">
            <FiCalendar className="w-3 h-3" />
            <span>{cert.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
