"use client";
import { IconSchema } from "@/src/schema/second-page-ui";
import { useState, useEffect } from "react";
import { useScreen } from "@/src/lib/context/screen-size-context";

interface IconUiProps {
  icon: IconSchema;
  i: number;
  inView: boolean;
  isMouseOver: boolean;
}

export const IconUi = ({ icon, i, inView, isMouseOver }: IconUiProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isTabletOrMobile = useScreen();

  useEffect(() => {
    if (inView && !isTabletOrMobile) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, i * 100);
      return () => clearTimeout(timeout);
    }
    if (isTabletOrMobile) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      className={`
            h-[80px] w-[80px] mb-5 md:h-[90px] transition-all ${isMouseOver ? "dark:from-black/70   from-white" : ""} ${isVisible ? "opacity-100" : "opacity-0"} duration-500 ease-in-out group md:w-[90px] relative items-center text-center backdrop-blur-md border-[1px] p-2 md:p-5 to-transparent rounded-xl border-gray-300/70 dark:border-white/10  bg-gradient-to-b  
        `}
    >
      <icon.icon
        className={`
                h-full z-10 rounded w-full 
                ${icon.title === "TypeScript" && "text-[#358EF1] p-[1px]"}
                ${icon.title === "Next.js" && "dark:text-white text-black  rounded-full"}
                ${icon.title === "Docker" && "text-[#2496ED]"}
                ${icon.title === "React" && "text-[#39bee3] dark:text-[#61DAFB]"}
                ${icon.title === "PostgreSQL" && "  dark:text-[#e8f5ff] text-[rgb(72,133,180)]"}
                ${icon.title === "Tailwind" && "text-[#06B6D4]"}
                ${icon.title === "Firebase" && "dark:text-[#FFCA28]"}
                ${icon.title === ".NET Core" && ""}
            `}
      />

      <div
        className={`
                dark:h-[40px] -z-10 translate-x-1/2 right-1/2 ${isMouseOver ? 'opacity-30' : 'opacity-10'} -translate-y-[70%] top-[80%] rounded-xl duration-500 ease-in-out transition-all w-[70px] absolute blur-[9px] 
                ${icon.title === "TypeScript" && "dark:bg-[#358EF1]  "} 
                ${icon.title === "Next.js" && "bg-gray-400/20 dark:bg-white/50"} 
                ${icon.title === "Docker" && "dark:bg-[#2496ED]"} 
                ${icon.title === "React" && "dark:bg-[#61DAFB]"} 
                ${icon.title === "PostgreSQL" && "dark:bg-[#336791]"} 
                ${icon.title === "Tailwind" && "dark:bg-[#06B6D4]"} 
                ${icon.title === "Firebase" && "dark:bg-[#FFCA28]"} 
                ${icon.title === ".NET Core" && "dark:bg-[#68217A]"} 
                `}
      >
        &nbsp;
      </div>
      <span
        className={`${isMouseOver ? "opacity-100" : "opacity-30"} whitespace-nowrap text-xs pt-3 md:pt-7 duration-500 ease-in-out transition-all flex w-full justify-center py-1 dark:text-white text-black text-center self-center`}
      >
        {icon.title !== "c#" ? icon.title : ""}
      </span>
    </div>
  );
};
