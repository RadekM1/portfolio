import React from "react";

interface BtnProps {
  Icon?: React.ElementType;
  label: string;
  index: number;
  //eslint-disable-next-line
  setIsActive: (index: number) => void;
  isActive: number;
}

const BtnSlate = ({ Icon, label, index, setIsActive, isActive }: BtnProps) => {
  return (
    <div className="flex ">
      <button
        disabled={isActive === index}
        onClick={() => setIsActive(index)}
        className={`flex flex-row hover:-translate-y-1 text-base  disabled:bg-gray-300 text-gray-800 dark:text-white dark:disabled:bg-slate-600 transition-transform ease-in-out duration-300  will-change-transform p-4  mx-1 sm:mx-2 h-9 md:h-10   items-center justify-center gap-2 whitespace-nowrap rounded-md hover:bg-gray-300/30 bg-gray-200 dark:bg-slate-800 dark:hover:bg-white/20`}
      >
        {Icon && <Icon className="dark:text-white text-gray-800" />}
        {label}
      </button>
    </div>
  );
};
export default BtnSlate;
