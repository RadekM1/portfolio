"use client";
import { StepSchema } from "@/src/schema/steps-schema";
import { useInView } from "react-intersection-observer";
import { H3Title } from "./typography/h3-title";

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
      className={` ${index % 2 === 0 ? "md:border-l-[1px]  md:px-0 md:border-b-[1px]" : "md:border-r-[1px] md:border-t-[1px]"} ${index === 1 && "md:border-b-[1px]"} px-2 dark:border-gray-600 py-10 md:py-0 border-gray-300  border-dashed md:p-10 flex flex-col sm:flex-row w-full`}
    >
      <div
        className={` ${index % 2 === 0 ? "md:order-1 md:mr-8 flex-grow" : "md:order-2 md:ml-8 flex-grow text-start md:text-end md:items-end"} pt-3 order-1 md:ml-8 items-center sm:items-start md:items-start flex justify-start  flex-col   text-start md:text-start self-start`}
      >
        <span className="flex flex-nowrap justify-start items-center flex-row">
          <span className="mr-3 ml-2 md:ml-0 h-8 w-8 border-[2px] flex self-center text-center items-center rounded-full justify-center align-middle border-rose-600 dark:border-rose-400 text-rose-600 dark:text-rose-400">
            {index + 1}
          </span>
          <H3Title title={step.title} />
        </span>
        <p className="text-rose-600 px-2 md:px-0 my-1 w-full  md:max-w-[66%] dark:text-rose-100 text-sm md:text-base  ">
          {step.summaryText}
        </p>
      </div>
      <div
        className={`flex md:h-full  w-full relative ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        <img
          src={step.img}
          className={`object-contain md:max-h-[300px] my-4 z-10`}
          alt={step.title}
        />
        <div
          className={`absolute -z-10 top-2  -right-2  ${inView && "dark:bg-sky-700/30 ease-in-out transition delay-300 duration-500"} blur-2xl rounded-full overflow-hidden  ${index === 0 ? "w-[50%] h-[100%]" : "w-[110%] h-[100%]"}`}
        ></div>
      </div>
    </div>
  );
};
