import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Fragment } from "react";

interface skillsProps {
  text: { title: string; text: string[] }[];
}

const Skills = ({ text }: skillsProps) => {
  return (
    <div className="flex w-full tracking-wide text-sm sm:text-base px-4 lg:px-16">
      <Accordion type="single" collapsible className="w-full">
        {text.map((item, i) => {
          return (
            <AccordionItem key={i} className="gap-1" value={`item-${i + 1}`}>
              <AccordionTrigger className="text-base md:text-xl" key={i}>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-start flex-col flex text-sm sm:text-base">
                {item.text.map((line, j) => {
                  return (
                    <Fragment key={j}>
                      <span className="my-1">{line}</span>
                    </Fragment>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Skills;
