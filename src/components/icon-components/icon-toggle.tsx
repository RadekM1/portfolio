"use client";

import { ToggleSchema } from "@/src/schema/second-page-ui";
import { useInView } from "react-intersection-observer";

interface ToggleSchemaProps {
  icons: ToggleSchema;
}

export const IconToggle = ({ icons }: ToggleSchemaProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div ref={ref} className="flex w-full  mt-6 pb-2 flex-col">
      <div className=" flex cursor-pointer  gap-2">
        <div className="relative h-6 w-12 border-gray-400 border-[1px]  transform-gpu  rounded-xl bg-gray-100 transition-colors duration-700">
          <icons.icon
            className={`w-6 ${inView ? "translate-x-0" : "-translate-x-[28px]"} -right-1 rounded-full p-[2px] duration-1000 ease-in-out transition-all will-change-transform absolute bg-slate-600 flex text-white self-center h-6`}
          />
        </div>
        <span
          className={`${inView ? " opacity-100 " : "opacity-0"} lg:ml-2 text-rose-600 will-change-auto dark:text-rose-400 duration-300 text-nowrap text-base font-semibold `}
        >
          {icons.title}
        </span>
      </div>
      <span
        className={` ${inView ? "   opacity-100" : " opacity-0 "} mt-2 text-black   text-sm dark:text-white will-change-auto transform-gpu duration-700 transition-opacity ease-in-out text-start`}
      >
        {icons.summary}
      </span>
    </div>
  );
};
