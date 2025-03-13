"use client";
import { H3Title } from "../../typography/h3-title";
import { offerText } from "@/src/lib/second-page-objects";
import { FaChrome } from "react-icons/fa";

export const OfferDiv = () => {
  return (
    <div className="text-base w-full group self-center lg:self-start max-w-[700px] flex flex-col items-center">
      <div className="flex flex-col w-full justify-between">
        <div className="h-[1px] z-20 flex self-end w-[130px] relative">
          <img
            loading="lazy"
            src="/vector/sit-border-light.png"
            alt="ikona programátora"
            className="block dark:hidden h-[300px] right-20 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="w-full py-10 text-5xl relative z-0 flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900">
          <FaChrome className="text-green-700 dark:text-gray-500 self-start h-10 w-10 mb-2" />
          <H3Title title={offerText[0].title} />
          <p className="text-sm text-start mt-1 flex self-start w-full">
            {offerText[0].text}
          </p>
        </div>
      </div>
    </div>
  );
};
