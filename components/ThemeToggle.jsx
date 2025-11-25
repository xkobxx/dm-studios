"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-accent text-xl" />
      ) : (
        <FiMoon className="text-accent text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
