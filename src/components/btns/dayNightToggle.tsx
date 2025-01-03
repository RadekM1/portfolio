'use client';

import { useTheme } from 'next-themes';
import { IoSunnySharp } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { MdDarkMode } from 'react-icons/md';
import React from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(null);

  useEffect(() => {
    setThemeIcon(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        setThemeIcon(resolvedTheme);
      }}
    >
      {themeIcon === 'light' && (
        <MdDarkMode className="mx-2 h-6 w-6 text-gray-600" />
      )}
      {themeIcon === 'dark' && (
        <IoSunnySharp className="mx-2 h-6 w-6 text-gray-200" />
      )}
    </button>
  );
}
