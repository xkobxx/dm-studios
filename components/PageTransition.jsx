"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none page-transition-overlay"
      />
      {children}
    </>
  );
};

export default PageTransition;
