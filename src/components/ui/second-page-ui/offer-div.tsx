"use client";
import { H4Title } from "../../typography/h4-title";
import { useInView } from "react-intersection-observer";
import { offerText } from "@/src/lib/second-page-objects";

export const OfferDiv = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={`text-base w-full  max-w-[700px] flex flex-col items-center  ${inView ? "translate-x-0" : "-translate-x-6"} transition-all duration-700 `}
    >
      <div className="flex flex-col gap-10 w-full justify-between">
        {offerText.map((offer) => {
          return (
            <div
              key={offer.index}
              className={`w-full py-10 text-5xl flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900`}
            >
              <offer.icon
                className={`self-start h-10 w-10 mb-2 ${offer.index === "app" && "bg-gray-500 rounded-lg p-1"} text-white`}
              />
              <H4Title title={offer.title} />
              <p className="text-sm text-start mt-1 flex self-start w-full">
                {offer.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
