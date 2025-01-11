"use client";

import { useState } from "react";
import { backEndText } from "../lib/content";
import { frontEndText } from "../lib/content";
import BtnSlate from "./btns/BtnSlate";
import SkillsFrontEnd from "./sections/skillsFrontEnd";
import SkillsBackEnd from "./sections/skillsBackEnd";
import FrontEndAnimation from "./frontendAnimation";
import BackEndAnimation from "./backendAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { btns } from "../lib/content";

const TechStackMain = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <div className="flex my-14  flex-col justify-center">
        <div className="flex">
          <span className="text-4xl mt-10 bg-gradient-to-b text-center dark:from-white dark:to-slate-600 from-gray-700 to-slate-900 bg-clip-text text-transparent">
            Skills
          </span>
        </div>
        <div className="flex h-[1px] w-[1px] mt-10 relative">
          <AnimatePresence mode="wait">
            {isActive === 0 && (
              <motion.div
                key="frontend"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <FrontEndAnimation />
              </motion.div>
            )}
            {isActive === 1 && (
              <motion.div
                key="backend"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <BackEndAnimation />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="mb-32 mt-10 z-10 border max-w-4xl justify-center flex h-full w-full border-gray-200 bg-white shadow-2xl rounded ease-in-out duration-500 dark:border-gray-800 dark:bg-gray-900 dark:shadow-blue-700">
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
            {isActive === 0 && (
              <motion.div
                key="frontend"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="mt-2 min-h-96 flex justify-center h-full flex-row w-full"
              >
                <SkillsFrontEnd frontEndText={frontEndText} />
              </motion.div>
            )}
            {isActive === 1 && (
              <motion.div
                key="backend"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="mt-2 min-h-96 flex justify-center h-full flex-row w-full"
              >
                <SkillsBackEnd backEndText={backEndText} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TechStackMain;
