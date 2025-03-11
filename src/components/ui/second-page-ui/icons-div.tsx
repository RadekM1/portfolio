"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IconUi } from "./icon-ui";
import { iconsOnSecondPage } from "./icons-object";
import { useScreen } from "@/src/lib/context/screen-size-context";

export const IconDiv = () => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-20% 0px -20% 0px",
  });

  const isTabletOrMobile = useScreen();

  useEffect(() => {
    if (isTabletOrMobile) {
      setIsMouseOver(true);
    }
  }, [isTabletOrMobile]);

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      className=" flex flex-col w-full cursor-default min-w-[350px]  relative justify-center group items-center  transition-all duration-700 self-start"
    >
      <h3 className="text-xl pt-10">Moderní technologie</h3>
      <p className="text-base  pt-2">NEXT.js, Docker, Typescript a další</p>
      <div
        ref={ref}
        className="py-10 px:2 lg:px-10 z-30 justify-center self-center cursor-default  grid gap-4 lg:gap-6 grid-cols-4 "
      >
        {iconsOnSecondPage.map((icon, i) => (
          <IconUi
            isMouseOver={isMouseOver}
            key={i}
            inView={inView}
            i={i}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};
