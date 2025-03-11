"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ToggleSchema } from "@/src/schema/second-page-ui";
import { useScreen } from "@/src/lib/context/screen-size-context";

interface ToggleSchemaProps {
  icons: ToggleSchema;
}


export const IconToggle = ({ icons }: ToggleSchemaProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-20% 0px -20% 0px",
  });
  const [isMobile, setMobile] = useState<boolean>(false)

  const screen = useScreen()

  useEffect(()=>{
    setMobile(screen)
  },[])

  return (
    <div className="flex w-full  mt-6 pb-2 flex-col">
      <label
        ref={ref}
        className="relative flex cursor-pointer flex-nowrap flex-row items-center gap-2 text-slate-500"
      >
        <input
          type="checkbox"
          readOnly
          checked={inView || isMobile}
          className="peer relative h-6 w-12 border-gray-400 border-[1px] cursor-pointer appearance-none rounded-xl bg-gray-100 transition-colors duration-700 after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all after:duration-1000 checked:bg-gray-200 dark:checked:bg-slate-300 checked:after:left-6 checked:after:bg-gray-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-gray-300 checked:after:hover:bg-gray-600 focus:outline-none checked:focus:bg-gray-400 checked:after:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
        />
        <div className="absolute left-[1.55rem] top-[0.08rem] flex h-6 w-6 items-center justify-center text-white opacity-100 transition-opacity duration-700 peer-checked:opacity-0">
          <icons.icon className="w-5  self-center h-5" />
        </div>
        <div className="absolute left-[1.55rem] top-[0.08rem] flex h-6 w-6 items-center justify-center text-white opacity-0 transition-opacity duration-700 peer-checked:opacity-100">
          <icons.icon className="w-5  self-center justify-center text-center h-5" />
        </div>
        <span
          className={`${inView || isMobile ? "text-rose-600 dark:text-rose-00 duration-300 " : "text-slate-400"} lg:ml-2 text-nowrap text-base font-semibold `}
        >
          {icons.title}
        </span>
      </label>
      <span
        className={` ${inView || isMobile ? " duration-1000 transition-opacity ease-in-out  opacity-100" : " "} mt-2 text-black opacity-0  text-sm dark:text-white text-start`}
      >
        {icons.summary}
      </span>
    </div>
  );
};
