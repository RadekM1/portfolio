"use client";

import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import React from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme === "light" || resolvedTheme === "dark") {
        setThemeIcon(resolvedTheme);
      }
    }
  }, [resolvedTheme]);

  return (
    <button
      onClick={() => {
        const newTheme = resolvedTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setThemeIcon(newTheme);
      }}
    >
      {themeIcon === "light" && (
        <MdDarkMode className="mx-2 h-6 w-6 text-gray-600" />
      )}
      {themeIcon === "dark" && (
        <IoSunnySharp className="mx-2 h-6 w-6 text-gray-200" />
      )}
    </button>
  );
}
