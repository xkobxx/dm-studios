"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMapPin } from "react-icons/fi";

const TimelineItem = ({ item, index, type = "experience" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEducation = type === "education";

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative pl-6 md:pl-0"
    >
      {/* Timeline line - desktop */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />

      {/* Timeline node */}
      <div className="hidden md:block absolute left-[-5px] top-6 w-2 h-2 rounded-full bg-accent ring-4 ring-primary" />

      {/* Mobile timeline line */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />

      {/* Mobile timeline node */}
      <div className="md:hidden flex absolute left-[-5px] top-6 w-2 h-2 rounded-full bg-accent ring-4 ring-primary" />

      {/* Card */}
      <motion.div
        className="ml-4 md:ml-8 py-5 px-0 border-b border-white/10 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          {/* Duration */}
          <span className="text-accent text-sm font-medium">
            {item.duration}
          </span>

          {/* Position/Degree */}
          <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-accent/80 transition-colors duration-200">
            {isEducation ? item.degree : item.position}
          </h3>

          {/* Company/Institution */}
          <div className="flex flex-wrap items-center gap-2 text-white/60 text-sm">
            <span className="font-medium text-white/80">
              {isEducation ? item.institution : item.company}
            </span>
            {item.location && (
              <>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Expand indicator */}
        <div className="mt-3 flex items-center gap-1.5 text-white/40 text-xs">
          <span>{isExpanded ? "Show less" : "Show details"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4">
                {isEducation ? (
                  <div className="space-y-4 text-sm">
                    {item.details?.specialization && (
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-wide">
                          Specialization
                        </span>
                        <p className="text-white/70 mt-1">
                          {item.details.specialization}
                        </p>
                      </div>
                    )}

                    {item.details?.keyModules && (
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-wide">
                          Key Modules
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.details.keyModules.map((module, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.details?.dissertation && (
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-wide">
                          Dissertation
                        </span>
                        <p className="text-white/70 mt-1 font-medium">
                          {item.details.dissertation.title}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.details.dissertation.technologies.map(
                            (tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs text-accent/80 bg-accent/10 px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {item.achievements?.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex gap-2.5 items-start text-sm text-white/60"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

export default TimelineItem;
