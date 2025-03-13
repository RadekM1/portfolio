"use client";
import { H3Title } from "../../typography/h3-title";
import { offerText } from "@/src/lib/second-page-objects";

export const OfferDiv = () => {
  return (
    <div
      className={`text-base w-full group self-center lg:self-start max-w-[700px]   flex flex-col items-center transition-all duration-700 `}
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
                  <div className="h-[1px] h-f w-[130px] relative">
                    <img
                      src="/vector/sit-border-light.png"
                      className="absolute dark:hidden top-1/2 transition-transform -translate-y-1/2"
                      alt="ikona programátora"
                    />
                    <img
                      src="/vector/sit-border-dark.png"
                      className="absolute hidden transition-transform dark:block top-1/2 -translate-y-1/2"
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
