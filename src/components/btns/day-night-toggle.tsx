"use client";

import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { useSyncExternalStore } from "react";
import { MdDarkMode } from "react-icons/md";
import React from "react";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false na serveru a při hydrataci, true po mountu na klientu
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const themeIcon = mounted ? resolvedTheme : null;

  return (
    <button
      aria-label="light or dark theme button"
      onClick={() => {
        const newTheme = resolvedTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
      }}
    >
      {themeIcon === "light" && (
        <MdDarkMode className="h-6 w-6 ease-in-out duration-300 transition-all text-gray-600 hover:text-gray-800" />
      )}
      {themeIcon === "dark" && (
        <IoSunnySharp className="h-6 w-6  ease-in-out duration-300 transition-all text-gray-200 hover:text-white " />
      )}
    </button>
  );
}
