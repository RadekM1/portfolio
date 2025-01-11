"use client";

import { useInView } from "react-intersection-observer";

const StepThree = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`md:border-t-[1px] md:border-l-[1px]  dark:border-gray-600 py-6 md:py-0 border-gray-300  border-dashed md:p-8 flex flex-row w-full`}
    >
      <div className="flex flex-grow flex-col mr-8 justify-start text-end md:text-start self-center">
        <span
          className=" text-base  sm:text-xl md:text-3xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300  dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent"
        >
          Zpracování schválené varianty
        </span>
        <span className="text-rose-600 my-1 dark:text-rose-100 text-sm md:text-base  ">
          podrobnější text ke chválení varianty bro
        </span>
      </div>
      <div className="flex relative">
        <img
          src={`vector/web-asembly-small.svg`}
          className={`h-32 my-4 md:h-52 z-10`}
          alt="třetí krok - zpracování schválené varianty"
        />
        <div
          className={`absolute z-0 top-2 -right-2 ${inView && "dark:bg-blue-800 ease-in-out transition delay-300 duration-500"} blur-xl rounded-full overflow-hidden w-[100%] h-[100%]`}
        ></div>
      </div>
    </div>
  );
};
export default StepThree;
