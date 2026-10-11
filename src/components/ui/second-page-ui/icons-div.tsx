"use client";
import { useState } from "react";
import { useInViewOnce } from "@/src/lib/use-animation-played";
import { IconUi } from "./icon-ui";
import { iconsOnSecondPage } from "./icons-object";
import { useScreen } from "@/src/lib/context/screen-size-context";
import { H3Title } from "../../typography/h3-title";
import { useTranslations } from "next-intl";

export const IconDiv = () => {
  const t = useTranslations("Offer.Tech");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { ref, inView } = useInViewOnce("offer-icons", {
    threshold: 0,
    rootMargin: "-10% 0px -10% 0px",
  });

  const isTabletOrMobile = useScreen();
  const isMouseOver = isHovered || isTabletOrMobile;

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      className=" flex flex-col w-full h-full cursor-default self-start min-w-[310px]  relative justify-center group items-center  transition-all duration-700"
    >
      <H3Title title={t("title")} />
      <p className="text-base  pt-2">{t("text")}</p>
      <div
        ref={ref}
        className="py-10 px:2 lg:px-10 z-30 justify-center h-full items-center self-center cursor-default  grid gap-3  lg:gap-6 grid-cols-4 "
      >
        {iconsOnSecondPage.map((icon, i) => (
          <IconUi
            isMouseOver={isMouseOver}
            key={i}
            inView={inView}
            i={i}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};
