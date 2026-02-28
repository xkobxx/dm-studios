"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatsRow = ({ stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-8 md:gap-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="text-center"
        >
          <div className="flex items-baseline justify-center gap-0.5">
            <CountUp
              end={stat.num}
              duration={4}
              delay={0.5}
              className="text-4xl md:text-5xl font-semibold text-white"
            />
            {stat.text.includes("%") && (
              <span className="text-3xl md:text-4xl font-semibold text-accent">
                %
              </span>
            )}
          </div>
          <p className="text-white/50 text-sm mt-2 max-w-[120px]">
            {stat.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsRow;
