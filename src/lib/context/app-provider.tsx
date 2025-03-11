"use client";
import React from "react";
import { ScreenProvider } from "./screen-size-context";
import { ThemeProvider } from "./themeProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ScreenProvider>{children}</ScreenProvider>
    </ThemeProvider>
  );
};
