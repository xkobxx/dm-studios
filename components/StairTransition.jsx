"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <Stairs key={pathname} />
    </AnimatePresence>
  );
};

export default StairTransition;
