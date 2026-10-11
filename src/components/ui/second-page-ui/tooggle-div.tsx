"use client";

import { useInViewOnce } from "@/src/lib/use-animation-played";
import { useTranslations } from "next-intl";
import { IconToggle } from "../../icon-components/icon-toggle";
import { RiComputerLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

const iconToggles = [
  { key: "responsive", icon: RiComputerLine },
  { key: "cms", icon: FaWordpress },
  { key: "design", icon: PiPaintBrushDuotone },
  { key: "speed", icon: BsSpeedometer },
  { key: "security", icon: AiOutlineSafety },
] as const;

export const ToggleDiv = () => {
  const t = useTranslations("Offer.Features");
  const { ref, inView } = useInViewOnce("offer-features", {
    threshold: 0,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={`text-base flex self-center py-10 group overflow-hidden relative border-t-gray-300/50 ${inView ? "translate-x-0" : "lg:translate-x-4"} transition-transform duration-500 ease-in-out  drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900 w-full max-w-[700px] lg:max-w-[400px]`}
    >
      <div className="flex flex-col">
        {iconToggles.map((item, i) => (
          <IconToggle
            key={i}
            icons={{
              icon: item.icon,
              title: t(`${item.key}.title`),
              summary: t(`${item.key}.summary`),
            }}
          />
        ))}
      </div>
      <div>
        <div className="absolute opacity-60 group-hover:opacity-100 duration-700 ease-in-out transition-all hidden md:block  dark:bg-indigo-500/30  w-[300px] h-[300px] rounded-full blur-3xl -top-24 -right-20 rotate-12"></div>
      </div>
    </div>
  );
};
