"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IconUi } from "./icon-ui";
import { iconsOnSecondPage } from "./icons-object";
import { useScreen } from "@/src/lib/context/screen-size-context";
import { H3Title } from "../../typography/h3-title";

export const IconDiv = () => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
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
      className=" flex flex-col w-full h-full cursor-default self-start min-w-[350px]  relative justify-center group items-center  transition-all duration-700"
    >
      <H3Title title="Moderní technologie" />
      <p className="text-base  pt-2">NEXT.js, Docker, Typescript a další</p>
      <div
        ref={ref}
        className="py-10 px:2 lg:px-10 z-30 justify-center h-full items-center self-center cursor-default  grid gap-4 lg:gap-6 grid-cols-4 "
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
