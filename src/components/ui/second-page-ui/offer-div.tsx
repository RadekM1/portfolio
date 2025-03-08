"use client";
import { H3Style } from "../../typography/h3-style";
import { useInView } from "react-intersection-observer";
import { TbWorldWww } from "react-icons/tb";
import { CiCalculator2 } from "react-icons/ci";

export const OfferDiv = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={`text-base flex flex-col border-t-gray-300 ${inView ? "translate-x-0" : "-translate-x-4"} transition-all duration-700   drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900 md:w-8/12`}
    >
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="w-full flex-col text-center">
          <TbWorldWww />
          <H3Style title="Webové stránky" />
        </div>
        <div className="w-full flex-col text-center">
          <CiCalculator2 />
          <H3Style title="Webové aplikace" />
        </div>
      </div>
    </div>
  );
};
