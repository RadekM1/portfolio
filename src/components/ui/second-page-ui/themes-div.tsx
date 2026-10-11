"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { useTranslations } from "next-intl";
import { ChevronsLeftRight } from "lucide-react";
import { H3Title } from "../../typography/h3-title";

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const ThemesDiv = () => {
  const t = useTranslations("Offer.Themes");
  const figureRef = useRef<HTMLElement>(null);
  const dragging = useRef(false);
  const [position, setPosition] = useState(50);

  const updateFromPointer = (clientX: number) => {
    const rect = figureRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    // On touch, wait for movement so a vertical page scroll doesn't make the divider jump
    if (e.pointerType === "mouse") updateFromPointer(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (dragging.current) updateFromPointer(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const steps: Record<string, number> = {
      ArrowLeft: position - 5,
      ArrowRight: position + 5,
      Home: 0,
      End: 100,
    };
    if (!(e.key in steps)) return;
    e.preventDefault();
    setPosition(clamp(steps[e.key]));
  };

  return (
    <div className="flex flex-col w-full self-center">
      <H3Title title={t("title")} />
      <p className="text-base pb-10 pt-2">{t("text")}</p>
      <div
        className={`text-base  self-center h-[27rem] lg:h-[30rem] flex-col flex  w-[16.5rem] min-w-[16.5rem] lg:min-w-[19rem]  relative transition-all duration-700   px-4 rounded-xl  `}
      >
        <figure
          ref={figureRef}
          className="relative h-full overflow-hidden rounded-[20px] border-black border-[10px] select-none touch-pan-y cursor-ew-resize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
          role="slider"
          tabIndex={0}
          aria-label={t("title")}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onClick={(e) => updateFromPointer(e.clientX)}
          onKeyDown={onKeyDown}
        >
          <img
            alt={t("lightAlt")}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            src="/img/diff-light.png"
            draggable={false}
          />
          <img
            alt={t("darkAlt")}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            src="/img/diff-dark.png"
            draggable={false}
          />
          <div
            className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-rose-500 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-rose-500 bg-white/80 text-rose-500 shadow-md backdrop-blur">
              <ChevronsLeftRight className="h-5 w-5" />
            </div>
          </div>
        </figure>
        <div className="w-[22%] rounded-full bg-black z-20 absolute h-3  top-[7%] md:top-[5%] left-1/2 -translate-x-1/2">
          &nbsp;
        </div>
      </div>
    </div>
  );
};
