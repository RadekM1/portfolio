"use client";
import { H3Title } from "../../typography/h3-title";
import { offerText } from "@/src/lib/second-page-objects";

const images = [
  { src: "/vector/sit-border-light.svg", alt: "ikona programátora světlé" },
  { src: "/vector/sit-border-dark.svg", alt: "ikona programátora tmavé" },
];

export const OfferDiv = () => {
  return (
    <div
      className={`text-base w-full  self-center lg:self-start max-w-[700px] flex flex-col items-center`}
    >
      <div className="flex flex-col w-full justify-between">
        <div className="h-[1px] z-20 flex self-end mr-4 w-[130px] relative">
          {images.map((image, i) => (
            <img
              key={i}
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className={`${i === 0 ? "block dark:hidden" : "hidden dark:block"}  h-[300px] right-20 top-[49.5%] -translate-y-[49.5%]`}
            />
          ))}
        </div>
        {offerText.map((offer, j) => (
          <div
            key={j}
            className={`w-full ${j === 0 ? "mb-10" : ""} py-10 text-5xl relative z-0 flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900`}
          >
            <offer.icon
              className={`${j === 0 ? "text-green-700 dark:text-gray-500" : "dark:bg-gray-500 bg-green-700 text-white dark:text-slate-900 rounded-lg"}  self-start h-10 w-10 mb-2`}
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
