"use client";

import * as React from "react";
import { H2title } from "../typography/h2-title";
import LightBox from "../ui/reference-page-ui/lightbox";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { H4Title } from "../typography/h4-title";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/reference-page-ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/reference-page-ui/dialog";

const refObject = [
  {
    src: "/img/reference/khs-reference.png",
    alt: "Horský oddíl Zlín",
    media_type: "image",
    url: "https://www.khszlin.com/",
    description: "Webový portál horolezeckého oddílu Zlín",
    website: "khszlin.com",
    dialogTitle: "Next.js + PostgreSQL + Tailwind",
    dialogContext: "Zde budou uvedeny podrobnosti technického řešení případu.",
  },
  {
    src: "/img/reference/odsrdecka-reference.png",
    alt: "Od srdéčka",
    media_type: "image",
    url: "https://www.odsrdecka.cz/",
    description: "Dorty a sladké bary z Kašavy od srdéčka",
    website: "odsrdecka.cz",
    dialogTitle: "Next.js + Wordpress + Tailwind",
    dialogContext: "Zde budou uvedeny podrobnosti technického řešení případu.",
  },
];

const Reference = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-30% 0px -30% 0px",
  });

  const handleImgClick = (i: number) => {
    setActiveId(i);
    setToggler(true);
  };

  return (
    <>
      <section
        id="reference"
        className="w-full short:min-h-[40rem] text-gray-700 dark:text-white flex min-h-[30rem] flex-col items-center border-b-[1px] border-t-[1px] border-gray-300 dark:border-gray-700 bg-white  dark:bg-slate-950 z-10"
      >
        <Carousel className="w-full m-2 px-7 pt-10 pb-24 max-w-[95%] xl:max-w-7xl">
          <H2title title="Reference" />
          <CarouselContent>
            {refObject.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <div
                    ref={ref}
                    className={`flex items-center mt-10 gap-4 flex-col select-none ${inView ? "translate-x-0" : "-translate-x-1/4"} transition-all duration-700 text-center`}
                  >
                    <H4Title title={item.description} />
                    <img
                      onClick={() => handleImgClick(i)}
                      className="object-contain py-6 cursor-pointer flex max-h-[300px] self-center  "
                      src={item.src}
                      alt={item.alt}
                    />
                    <div className="w-full  h-full items-center gap-2 lg:gap-4 justify-center flex flex-col sm:flex-row">
                      <a href={item.url} target="_blank">
                        <span className="flex  px-4 w-[170px] hover:bg-gray-300/30 dark:hover:bg-white/20 duration-700 ease-in-out transition-all py-2 rounded-md border-[1px] items-center justify-center whitespace-nowrap">
                          Otevřít stránku
                        </span>
                      </a>
                      <Dialog>
                        <DialogTrigger>
                          <span className="flex px-4 w-[170px]  hover:bg-gray-300/30 dark:hover:bg-white/20 duration-700 ease-in-out transition-all py-2 rounded-md border-[1px] items-center justify-center whitespace-nowrap">
                            Technické provedení
                          </span>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{item.dialogTitle}</DialogTitle>
                            <DialogDescription>
                              {item.dialogContext}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <button
                      onClick={() => handleImgClick(i)}
                      aria-label="reference fullscreen"
                      className="absolute top-0 right-0 hidden sm:flex hover:bg-gray-300/30 dark:hover:bg-white/20 h-12 w-12  items-center justify-center rounded-full duration-700 ease-in-out transition-all border-[1px]"
                    >
                      <BsFullscreen className=" text-black self-center dark:text-gray-400" />
                    </button>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            className={`${inView ? " scale-100 md:scale-150" : "scale-50"} transition-all duration-700`}
          />
          <CarouselNext
            className={`${inView ? "scale-100 md:scale-150" : "scale-50"} transition-all duration-700`}
          />
        </Carousel>
      </section>
      <LightBox
        input={refObject}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </>
  );
};
export default Reference;
