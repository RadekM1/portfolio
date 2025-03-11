"use client";

import * as React from "react";
import { H2title } from "../typography/h2-title";
import LightBox from "../ui/reference-page-ui/lightbox";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { H3Title } from "../typography/h3-title";

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
    description: "Dorty a sladké bary z Kašavy",
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
    rootMargin: "-20% 0px -20% 0px",
  });

  const handleImgClick = (i: number) => {
    setActiveId(i);
    setToggler(true);
  };

  return (
    <>
      <section
        id="reference"
        className="w-full relative short:min-h-[40rem] text-gray-700 dark:text-white flex min-h-[30rem] flex-col items-center border-b-[1px] border-t-[1px] border-gray-300 dark:border-gray-700 bg-white  dark:bg-slate-950 z-10"
      >
        <Carousel className="w-full relative m-2 px-7 pt-10 pb-24 max-w-[95%] xl:max-w-7xl">
          <H2title title="Reference" />
          <CarouselContent>
            {refObject.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <div
                    ref={ref}
                    className={`flex items-center mt-10 gap-4 flex-col select-none ${inView ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"} transition-all duration-700 text-center`}
                  >
                    <H3Title title={item.description} />
                    <img
                      onClick={() => handleImgClick(i)}
                      className="object-contain py-6 cursor-pointer flex max-h-[300px] self-center  "
                      src={item.src}
                      alt={item.alt}
                    />
                    <div className="w-full  h-full items-center gap-2 lg:gap-4 justify-center flex flex-col sm:flex-row">
                      <a href={item.url} target="_blank">
                        <span className="flex  px-4 w-[170px] hover:bg-gray-300/30 bg-gray-200 dark:bg-slate-900 dark:hover:bg-white/20 duration-700 ease-in-out transition-all py-2 rounded-md border-[1px] items-center justify-center whitespace-nowrap">
                          Otevřít stránku
                        </span>
                      </a>
                      <Dialog>
                        <DialogTrigger>
                          <span className="flex px-4 w-[170px] dark:bg-slate-900 bg-gray-200 hover:bg-gray-300/30 dark:hover:bg-white/20 duration-700 ease-in-out transition-all py-2 rounded-md border-[1px] items-center justify-center whitespace-nowrap">
                            Tech stack
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
        <div
          className={`-z-40 dark:bg-[linear-gradient(to_right,#161038_1px,transparent_1px),linear-gradient(to_bottom,#161038_1px,transparent_1px)] bg-[linear-gradient(to_right,#f5f6f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f6f7_1px,transparent_1px)] dark:bg-[length:24px_24px] bg-[length:24px_24px] absset-0 w-full overflow-hidden absolute h-full`}
          style={{ maskImage: "linear-gradient(transparent, #0C4A6E)" }}
        ></div>
        <div className="absolute top-[40%] hidden md:block  right-[10%] -z-10 blur-[50px] sm:blur-[80px] md:blur-[150px] lg:blur-[200px] dark:bg-[#0C4A6E]/70 ease-in-out transition delay-300 duration-500 overflow-hidden  w-[60%] h-[50%]"></div>
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
