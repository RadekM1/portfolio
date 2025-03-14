"use client";

import { useInView } from "react-intersection-observer";
import { IconToggle } from "../../icon-components/icon-toggle";
import { ToggleSchema } from "@/src/schema/second-page-ui";
import { RiComputerLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

const iconToggles: ToggleSchema[] = [
  {
    icon: RiComputerLine,
    title: "Responzivní design",
    summary:
      "Weby i aplikace jsou navrhovány metodou Mobile first. Plně tedy podporují všechny typy zařízení",
  },
  {
    icon: FaWordpress,
    title: "Redakční systémy",
    summary: "Wordpress jako headless CMS, Strapi nebo i na míru",
  },
  {
    icon: PiPaintBrushDuotone,
    title: "Webdesign na míru",
    summary:
      "Design bez šablon, přesně dle přání, žádné omezení šablonovacím systémem",
  },
  {
    icon: BsSpeedometer,
    title: "Bezkonkurenční rychlost",
    summary:
      "Přechod mezi stránkami je okamžitý a působí spíše jako offline aplikace než web. Zkuste si proklikat některou z referencí",
  },
  {
    icon: AiOutlineSafety,
    title: "Bezpečnost",
    summary:
      "Průmyslový standard díky OAuth 2.0 a OpenID, včetně integrací do firemních Microsoft Azure struktur",
  },
];

export const ToggleDiv = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={`text-base flex self-center py-10 group overflow-hidden relative border-t-gray-300/50 ${inView ? "translate-x-0" : "lg:translate-x-4"} transition-transform duration-500 ease-in-out  drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900 w-full max-w-[700px] lg:max-w-[400px]`}
    >
      <div className="flex flex-col">
        {iconToggles.map((item, i) => (
          <IconToggle key={i} icons={item} />
        ))}
      </div>
      <div>
        <div className="absolute opacity-60 group-hover:opacity-100 duration-700 ease-in-out transition-all hidden md:block  dark:bg-indigo-500/30  w-[300px] h-[300px] rounded-full blur-3xl -top-24 -right-20 rotate-12"></div>
      </div>
    </div>
  );
};
