"use client";
import { H3Title } from "../../typography/h3-title";
import { offerText } from "@/src/lib/second-page-objects";
import { useInView } from "react-intersection-observer";

export const OfferDiv = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      className={`text-base w-full transition-transform duration-500 ease-in-out self-center ${inView ? "translate-x-0" : "translate-x-4 lg:-translate-x-4"} lg:self-start max-w-[700px] flex flex-col items-center`}
    >
      <div className="flex flex-col h-full w-full justify-between">
        <div
          ref={ref}
          className="h-px mx-1 px-1 z-20 flex self-end w-32 mr-10 relative"
        >
          <img
            src="/vector/sit-border.svg"
            alt="ikona programátora"
            className={` h-[300px]  top-[49.5%] left-0 -translate-y-[49.5%]`}
          />
        </div>
        {offerText.map((offer, j) => (
          <div
            key={j}
            className={`w-full ${j === 0 ? "mb-10" : ""} py-10 text-5xl relative z-0 flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900`}
          >
            <offer.icon
              className={`${j === 0 ? "text-green-700  border-none dark:text-gray-500" : "dark:bg-gray-500 bg-green-700 text-white rounded-lg"}  self-start h-10 w-10 mb-2`}
            />
            <H3Title title={offer.title} />
            <p className="text-sm text-start mt-1 flex self-start w-full">
              {offer.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
