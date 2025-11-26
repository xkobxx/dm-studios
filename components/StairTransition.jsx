"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Stairs />;
};

export default StairTransition;
