"use client";

import { useInView } from "react-intersection-observer";

const StepOne = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={` md:border-l-[1px] dark:border-gray-600  border-gray-300 py-6 md:py-2 md:border-b border-dashed md:p-8 flex flex-row w-full`}
    >
      <div className="flex flex-grow text-end mr-8 md:text-start flex-col justify-start self-center">
        <span
          className=" text-xl md:text-3xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300 dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent"
        >
          Zajištění podkladů
        </span>
        <span className="text-rose-600 my-1 dark:text-rose-100 text-sm md:text-base  ">
          summary text
        </span>
      </div>
      <div className="flex relative">
        <img
          src={`vector/education.svg`}
          className={`h-24 my-4 md:h-44 z-10`}
          alt="první krok - sehnání podkladů obrázek"
        />
        <div
          className={`absolute right-2 z-0 top-10 ${inView && "dark:bg-blue-800 ease-in-out transition delay-300 duration-500"} blur-2xl rounded-full overflow-hidden w-[50%] h-[60%]`}
        ></div>
      </div>
    </div>
  );
};
export default StepOne;
