"use client";

import { useInView } from "react-intersection-observer";

const StepFour = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`md:border-t-[1px] md:border-r-[1px] z-30 md:py-2 dark:border-gray-600 py-6 border-gray-300 border-dashed md:p-8 flex flex-row w-full`}
    >
      <div className="flex justify-start self-center relative">
        <img
          src={`vector/launch.svg`}
          className={`h-32 my-4 md:h-60 z-20`}
          alt="čtvrtý krok - uvedení do provozu"
        />
        <div
          className={`absolute top-6
           ${inView && "dark:bg-blue-800 ease-in-out transition delay-300 duration-500"} blur-2xl rounded-full overflow-hidden w-[100%] h-[90%]`}
        ></div>
      </div>
      <div className="flex ml-8 flex-grow flex-col justify-start text-start md:text-end self-center">
        <span
          className=" text-xl  md:text-3xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300 dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent"
        >
          Uvedení do provozu
        </span>
        <span className="text-rose-600 my-1 dark:text-rose-100 text-sm md:text-base  ">
          shrnutí k uvedení do provozu
        </span>
      </div>
    </div>
  );
};
export default StepFour;
