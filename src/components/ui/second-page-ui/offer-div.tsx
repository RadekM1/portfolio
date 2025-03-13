"use client";
import { H3Title } from "../../typography/h3-title";
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
      className={`text-base w-full group self-center lg:self-start max-w-[700px]   flex flex-col items-center  ${inView ? "translate-x-0" : "xl:-translate-x-10 md:-translate-x-4"} transition-all duration-700 `}
    >
      <div className="flex flex-col gap-10 w-full justify-between">
        {offerText.map((offer) => {
          return (
            <div
              key={offer.index}
              className={`w-full py-10 text-5xl   relative z-0 flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900`}
            >
              <offer.icon
                className={`self-start h-10 w-10 mb-2 ${offer.index === "app" ? " text-white dark:text-slate-800 bg-green-700 dark:bg-gray-500 rounded-lg p-1" : "text-green-700 dark:text-gray-500"}  `}
              />
              <H3Title title={offer.title} />
              <p className="text-sm text-start mt-1 flex self-start w-full">
                {offer.text}
              </p>
              {offer.index === "web" && (
                <div className="h-[1px] absolute top-0 right-36 w-[10px]">
                  <div className="h-[1px] w-[130px] relative">
                    <img
                      src="/vector/sit-border-light.svg"
                      className="absolute block dark:hidden top-1/2 -translate-y-1/2"
                      alt="ikona programátora"
                    />
                    <img
                      src="/vector/sit-border-dark.svg"
                      className="absolute hidden dark:block top-1/2 -translate-y-1/2"
                      alt="ikona programátora"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
