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
      className={` ${index % 2 === 0 ? "md:border-l-[1px] py-6 md:px-0 md:border-b-[1px]" : "md:border-r-[1px] md:border-t-[1px]"} ${index === 1 && "md:border-b-[1px]"} px-2 dark:border-gray-600 py-10  border-gray-300  border-dashed md:p-10 flex flex-col sm:flex-row w-full`}
    >
      <div
        className={` ${index % 2 === 0 ? "md:order-1 md:mr-8 flex-grow" : "md:order-2 md:ml-8 flex-grow text-start md:text-end md:items-end"} pt-3 order-1 md:ml-8 items-start flex justify-start  flex-col   text-start md:text-start self-start`}
      >
        <span className="flex flex-nowrap justify-start gap-3 pb-1 items-center flex-row">
          <span
            className={`${index % 2 === 0 ? "" : "md:order-2 "} text-xl ml-2 md:ml-0 h-12 w-12 border-[2px] flex self-center text-center items-center rounded-full justify-center align-middle border-green-600 dark:border-rose-400 text-green-600 dark:text-rose-400`}
          >
            {index + 1}
          </span>
          <H3Title title={step.title} />
        </span>
        <p className="text-black px-2 md:px-0 my-1 w-full  dark:text-white text-sm md:text-base  ">
          {step.summaryText}
        </p>
      </div>
      <div
        className={`flex md:h-full  justify-center w-full relative ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        <img
          src={step.img}
          className={`object-contain max-h-[150px] md:max-h-[280px] my-4 z-10`}
          alt={step.title}
        />
        <div
          className={`absolute -z-10 top-2 hidden lg:block  -right-2  ${inView && "dark:bg-sky-700/30 ease-in-out transition delay-300 duration-500"} blur-2xl rounded-full overflow-hidden  ${index === 0 ? "w-[50%] h-[100%]" : "w-[110%] h-[100%]"}`}
        ></div>
      </div>
    </div>
  );
};
