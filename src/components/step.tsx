"use client";
import { StepSchema } from "@/src/schema/steps-schema";
import { useInView } from "react-intersection-observer";

interface StepProps {
  step: StepSchema;
  index: number;
}

export const Step = ({ step, index }: StepProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={` ${index % 2 === 0 ? "md:border-l-[1px]  md:border-b-[1px]" : "md:border-r-[1px] md:border-t-[1px]"} ${index === 1 && "md:border-b-[1px]"} dark:border-gray-600 py-10 md:py-0 border-gray-300  border-dashed md:p-10 flex flex-row w-full`}
    >
      <div
        className={` ${index % 2 === 0 ? "order-1 mr-8 flex-grow" : "order-2 ml-8 flex-grow text-end items-end"} pt-3 flex justify-start  flex-col   text-end md:text-start self-start`}
      >
        <h3
          className=" text-base  sm:text-xl md:text-3xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300  dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent"
        >
          {step.title}
        </h3>
        <p className="text-rose-600 my-1 dark:text-rose-100 text-sm md:text-base  ">
          {step.summaryText}
        </p>
      </div>
      <div
        className={`flex relative ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        <img
          src={step.img}
          className={`h-32 md:h-44 my-4 z-10`}
          alt={step.title}
        />
        <div
          className={`absolute z-0 top-2  -right-2  ${inView && "dark:bg-blue-800/70 ease-in-out transition delay-300 duration-500"} blur-xl rounded-full overflow-hidden  ${index === 0 ? "w-[50%] h-[100%]" : "w-[110%] h-[100%]"}`}
        ></div>
      </div>
    </div>
  );
};
