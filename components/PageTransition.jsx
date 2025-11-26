"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
