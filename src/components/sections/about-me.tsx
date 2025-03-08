"use client";

import { useState } from "react";
import { SectionTitle } from "../sectionTitle";
import { PieChartComponent } from "../ui/pie-chart";
import { AreaChartComponent } from "../ui/area-chart";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [visitors, setVisitors] = useState<number>(300);
  const [days, setDays] = useState<string>("90d");

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section className="flex-col flex w-full justify-center text-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 dark:bg-slate-900 bg-white z-10">
      <SectionTitle title="O mně" />

      <p className="text-base md:text-xl px-4 mb-5 max-w-[650px]">
        Hodně mně baví komplexní systémy, propojit vše dohromady a vizualizace.
        Spousta grafů a tabulek? To je něco pro mě &#129321;
      </p>
      <img
        className="max-h-32 md:max-h-48 mx-10 mt-5  self-center"
        src="vector/me.svg"
        alt="vektor já ikonka"
      />

      <div
        ref={ref}
        className="flex w-full items-center min-h-[22rem] md:min-h-[28rem] max-w-[1200px] justify-center flex-row "
      >
        {inView && (
          <>
            <AreaChartComponent setDays={setDays} setVisitors={setVisitors} />
            <PieChartComponent days={days} input={visitors} />
          </>
        )}
      </div>
    </section>
  );
};
export default AboutMe;
