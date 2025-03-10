"use client";

import { useState } from "react";
import { backEndText } from "../lib/skills-object";
import { frontEndText } from "../lib/skills-object";
import BtnSlate from "./btns/BtnSlate";
import Skills from "./sections/skills";
import FrontEndAnimation from "./frontendAnimation";
import BackEndAnimation from "./backendAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { btns } from "../lib/skills-object";
import { H2title } from "./typography/h2-title";

const techStack = [
  { key: "frontend", node: FrontEndAnimation, text: frontEndText },
  { key: "backend", node: BackEndAnimation, text: backEndText },
];

const TechStackMain = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <div className="flex my-14  flex-col justify-center">
        <H2title title="Skills" />
        <div className="flex h-[1px]  w-[1px] self-center mt-10 relative">
          {techStack.map((stack, i) => {
            return (
              <AnimatePresence key={i} mode="wait">
                {isActive === i && (
                  <motion.div
                    key={stack.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                  >
                    {<stack.node />}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
      <div className="mb-32 mt-10 z-10 min-h-80 border max-w-4xl justify-center flex h-full w-full border-gray-200 bg-white  rounded ease-in-out duration-500 dark:border-gray-800 dark:bg-gray-900 dark:shadow-blue-900">
        <div className="flex w-full m-1 flex-col justify-start text-center">
          <div className="flex justify-center my-2 w-full text-center">
            {btns.map((btn, index) => (
              <BtnSlate
                key={index}
                index={index}
                Icon={btn.Icon}
                isActive={isActive}
                setIsActive={setIsActive}
                label={btn.label}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            {techStack.map((stack, i) => {
              return (
                isActive === i && (
                  <motion.div
                    key={stack.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    className="mt-2  sm:min-h-[500px] flex justify-center h-full flex-row w-full"
                  >
                    <Skills text={stack.text} />
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TechStackMain;
