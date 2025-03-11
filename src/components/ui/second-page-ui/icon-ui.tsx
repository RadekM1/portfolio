"use client";
import { IconSchema } from "@/src/schema/second-page-ui";
import { useState, useEffect } from "react";

interface IconUiProps {
  icon: IconSchema;
  i: number;
  inView: boolean;
  isMouseOver: boolean;
}

export const IconUi = ({ icon, i, inView, isMouseOver }: IconUiProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, i * 100);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <div
      className={`
            h-[80px] w-[80px] mb-5 md:h-[90px] transition-all ${isMouseOver ? "dark:from-black/70 from-white/70" : ""} ${isVisible ? "opacity-100" : "opacity-0"} duration-500 ease-in-out group md:w-[90px] relative items-center text-center backdrop-blur-md border-[1px] p-2 md:p-5 to-transparent rounded-xl border-gray-300/70 dark:border-white/10  bg-gradient-to-b  
            ${icon.title === "TypeScript" && `${isMouseOver ? "dark:drop-shadow-[0_15px_15px_rgba(53,142,241,0.5)] drop-shadow-[0_15px_15px_rgba(53,142,241,0.5)]" : ""}`} 
            ${icon.title === "Next.js" && `${isMouseOver ? "  drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.5)]" : ""}`} 
            ${icon.title === "Docker" && `${isMouseOver ? "  drop-shadow-[0_15px_15px_rgba(36,150,237,0.5)]" : ""}`} 
            ${icon.title === "React" && `${isMouseOver ? "  drop-shadow-[0_15px_15px_rgba(97,218,251,0.5)]" : ""}`} 
            ${icon.title === "PostgreSQL" && `${isMouseOver ? " dark:drop-shadow-[0_15px_15px_rgba(53,142,241,0.5)]  drop-shadow-[0_15px_15px_rgba(53,142,241,0.5)]" : ""}`}
            ${icon.title === "Tailwind" && `${isMouseOver ? "   drop-shadow-[0_15px_15px_rgba(6,182,212,0.5)]" : ""}`}
            ${icon.title === "Firebase" && `${isMouseOver ? "  drop-shadow-[0_15px_15px_rgba(255,202,40,0.5)]" : ""}`} 
            ${icon.title === ".NET Core" && `${isMouseOver ? " drop-shadow-[0_15px_15px_rgba(104,33,120,0.2)] dark:drop-shadow-[0_15px_15px_rgba(104,33,120,1)]" : ""}`}  
        `}
    >
      <icon.icon
        className={`
                h-full z-10 rounded w-full 
                ${icon.title === "TypeScript" && "text-[#358EF1] p-[1px]"}
                ${icon.title === "Next.js" && "dark:text-white text-black  rounded-full"}
                ${icon.title === "Docker" && "text-[#2496ED]"}
                ${icon.title === "React" && "text-[#39bee3] dark:text-[#61DAFB]"}
                ${icon.title === "PostgreSQL" && "dark:text-[#e8f5ff] text-[rgb(72,133,180)]"}
                ${icon.title === "Tailwind" && "text-[#06B6D4]"}
                ${icon.title === "Firebase" && "dark:text-[#FFCA28]"}
                ${icon.title === ".NET Core" && ""}
            `}
      />

      <div
        className={`
                dark:h-[40px] opacity-100 -z-10 translate-x-1/2 right-1/2 -translate-y-[70%] top-[80%] rounded-xl duration-500 ease-in-out transition-all w-[70px] absolute blur-[9px] 
                ${icon.title === "TypeScript" && "dark:bg-[#358EF1]/30"} 
                ${icon.title === "Next.js" && "bg-gray-400/20 dark:bg-white/10"} 
                ${icon.title === "Docker" && "dark:bg-[#2496ED]/20"} 
                ${icon.title === "React" && "dark:bg-[#61DAFB]/10"} 
                ${icon.title === "PostgreSQL" && "dark:bg-[#336791]/20"} 
                ${icon.title === "Tailwind" && "dark:bg-[#06B6D4]/20"} 
                ${icon.title === "Firebase" && "dark:bg-[#FFCA28]/20"} 
                ${icon.title === ".NET Core" && "dark:bg-[#68217A]/50"} 
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
