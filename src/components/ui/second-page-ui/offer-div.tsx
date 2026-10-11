"use client";
import { H3Title } from "../../typography/h3-title";
import { offerCards } from "@/src/lib/second-page-objects";
import { useInViewOnce } from "@/src/lib/use-animation-played";
import { useTranslations } from "next-intl";

export const OfferDiv = () => {
  const t = useTranslations("Offer");
  const { ref, inView } = useInViewOnce("offer-cards", {
    threshold: 0,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      className={`text-base w-full transition-transform duration-500 ease-in-out self-center ${inView ? "md:translate-x-0" : "lg:-translate-x-4"} lg:self-start max-w-[700px] flex flex-col items-center`}
    >
      <div className="flex flex-col h-full w-full justify-between">
        <div
          ref={ref}
          className="h-px mx-1 px-1 z-20 flex self-end w-32  relative"
        >
          <img
            src="/vector/sit-border.svg"
            alt={t("programmerAlt")}
            className={` h-[300px]  top-[49.5%] left-0 -translate-y-[49.5%]`}
          />
        </div>
        {offerCards.map((offer, j) => (
          <div
            key={j}
            className={`w-full ${j === 0 ? "mb-10" : ""} py-10 text-5xl relative z-0 flex flex-col text-start drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900`}
          >
            <offer.icon
              className={`${j === 0 ? "text-green-700  border-none dark:text-gray-500" : "dark:bg-gray-500 bg-green-700 text-white rounded-lg"}  self-start h-10 w-10 mb-2`}
            />
            <H3Title title={t(`Cards.${offer.key}.title`)} />
            <p className="text-sm text-start mt-1 flex self-start w-full">
              {t(`Cards.${offer.key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
