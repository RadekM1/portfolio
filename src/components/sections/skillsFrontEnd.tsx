import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Fragment } from "react";

interface frontEndTextProps {
  frontEndText: { title: string; text: string[] }[];
}

const SkillsFrontEnd = ({ frontEndText }: frontEndTextProps) => {
  return (
    <div className="flex w-full text-xs  sm:text-sm md:w-2/3">
      <Accordion type="single" collapsible className="w-full">
        {frontEndText.map((item, i) => {
          return (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger key={i}>{item.title}</AccordionTrigger>
              <AccordionContent className="text-start text-xs  sm:text-sm">
                {item.text.map((line, j) => {
                  return (
                    <Fragment key={j}>
                      {line}
                      <br />
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
export default SkillsFrontEnd;
