"use client";

import React from "react";
import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const ScreenContext = createContext<boolean | null>(null);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <ScreenContext.Provider value={isTabletOrMobile}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (context === null) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
};
