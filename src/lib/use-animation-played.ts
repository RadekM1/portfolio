import { useEffect, useState } from "react";
import {
  useInView,
  type IntersectionOptions,
} from "react-intersection-observer";

// Přepnutí jazyka změní segment [locale], takže Next.js přemountuje celou stránku
// a vstupní animace by se spustily znovu. Modul se při klientské navigaci znovu
// nenačítá, proto si tu pamatujeme, které animace už proběhly (do reloadu stránky).
const played = new Set<string>();

/** true, pokud animace s tímto id už jednou proběhla */
export const useAnimationPlayed = (id: string) => {
  const [wasPlayed] = useState(() => played.has(id));

  useEffect(() => {
    played.add(id);
  }, [id]);

  return wasPlayed;
};

/** useInView s triggerOnce, po přemountování vrací rovnou inView = true */
export const useInViewOnce = (id: string, options?: IntersectionOptions) => {
  const [wasPlayed] = useState(() => played.has(id));
  const { ref, inView } = useInView({
    ...options,
    triggerOnce: true,
    skip: wasPlayed,
  });

  useEffect(() => {
    if (inView) played.add(id);
  }, [id, inView]);

  return { ref, inView: wasPlayed || inView, wasPlayed };
};
