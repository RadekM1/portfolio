"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { H2title } from "../typography/h2-title";
import { PieChartComponent } from "../ui/pie-chart";
import { AreaChartComponent } from "../ui/area-chart";
import { useInViewOnce } from "@/src/lib/use-animation-played";

const AboutMe = () => {
  const [visitors, setVisitors] = useState<number>(300);
  const [days, setDays] = useState<string>("90d");
  const t = useTranslations("About");

  const { ref, inView, wasPlayed } = useInViewOnce("about-charts", {
    threshold: 0.4,
  });

  return (
    <section
      id="about-me"
      className="flex-col overflow-hidden relative flex w-full justify-center text-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 dark:bg-slate-950 bg-gray-100 z-10"
    >
      <div
        className={`hidden lg:block dark:bg-[linear-gradient(to_right,#161038_1px,transparent_1px),linear-gradient(to_bottom,#161038_1px,transparent_1px)] bg-[linear-gradient(to_right,#f5f6f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f6f7_1px,transparent_1px)] dark:bg-[length:24px_24px] bg-[length:24px_24px] z-0 absset-0 w-full overflow-hidden absolute h-full`}
        style={{ maskImage: "linear-gradient(transparent, #FAF9F6)" }}
      ></div>
      <div className="absolute hidden lg:block dark:bg-indigo-800/40 w-[50%] h-[9%] blur-3xl top-10 -right-44 rotate-12"></div>
      <div className="absolute hidden lg:block dark:bg-indigo-800/60 w-[10%] h-[5%] blur-3xl top-10 right-0 rotate-12"></div>
      <div className="absolute hidden lg:block dark:bg-blue-800/40 w-[70%] h-[10%] blur-[80px] bottom-0 left-0 -rotate-[20deg]"></div>
      <div className="absolute hidden lg:block dark:bg-indigo-800/40 w-[50%] h-[10%] blur-3xl bottom-44 -right-10 -rotate-[20deg]"></div>

      <div className="relative z-10 flex flex-col w-full items-center">
        <H2title title={t("title")} />

        <p className="text-base flex flex-col md:text-xl px-4 mb-5 max-w-[600px]">
          {t("text")}
        </p>
        <img
          className="max-h-32 md:max-h-48 lg:max-h-64 mx-10 mt-5  self-center"
          src="/vector/me-about.svg"
          alt={t("imageAlt")}
        />

        <div
          ref={ref}
          className="flex w-full items-center min-h-[22rem] md:min-h-[28rem] max-w-[1200px] justify-center flex-row "
        >
          {inView && (
            <>
              <AreaChartComponent
                setDays={setDays}
                setVisitors={setVisitors}
                animate={!wasPlayed}
              />
              <PieChartComponent
                days={days}
                input={visitors}
                animate={!wasPlayed}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
