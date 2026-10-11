"use client";

import React from "react";
import { createContext, useContext, useSyncExternalStore } from "react";

const ScreenContext = createContext<boolean | null>(null);

const QUERY = "(max-width: 900px)";

const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  // Server snapshot je vždy false – při hydrataci se tak klient shoduje se serverovým HTML
  // a skutečnou hodnotu React doplní hned po ní. Jinak by na mobilu zůstaly v DOM
  // třídy ze serveru (např. opacity-0), protože React rozdílné atributy při hydrataci neopravuje.
  const isTabletOrMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );

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
