"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
