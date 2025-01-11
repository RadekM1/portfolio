"use client";

import { useInView } from "react-intersection-observer";

const StepTwo = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={` md:border-r-[1px] dark:border-gray-600  border-gray-300 border-dashed py-6 md:py-0 md:p-8 flex flex-row w-full`}
    >
      <div className="flex my-4 relative">
        <img
          src="vector/approved-small.svg"
          className={`h-24 md:h-44 z-10`}
          alt="druhý krok - připomínkování varianty"
        />
        <div
          className={`absolute top-2 z-0 ${inView && "dark:bg-blue-700 ease-in-out transition delay-300 duration-500"} blur-3xl rounded-full overflow-hidden w-[110%] h-[100%]`}
        ></div>
      </div>
      <div className="flex text-start md:text-end ml-8 flex-grow flex-col justify-start self-center">
        <span
          className=" text-xl md:text-3xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300 dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent"
        >
          Připomínkování
        </span>
        <span className="text-rose-600 my-1 dark:text-rose-100 text-sm md:text-base  ">
          Zpracování schválené varianty
        </span>
      </div>
    </div>
  );
};
export default StepTwo;
