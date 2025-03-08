"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { IconUi } from "./icon-ui";
import { iconsOnSecondPage } from "./icons-object";

export const IconDiv = () => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      className=" flex flex-col w-full cursor-default min-w-[350px]  relative justify-center group items-center  transition-all duration-700 self-start"
    >
      <h3 className="text-xl pt-10">Moderní technologie</h3>
      <p className="text-base  pt-2">NEXT.js, Docker, Typescript a další</p>
      <div
        ref={ref}
        className="py-10 px:2 lg:px-10 justify-center self-center cursor-default  grid gap-4 grid-cols-4 "
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
