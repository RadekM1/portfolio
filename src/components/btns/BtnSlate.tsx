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
    <div className="flex hover:-translate-y-1 ease-in-out duration-500">
      <button
        disabled={isActive === index}
        onClick={() => setIsActive(index)}
        className={`flex flex-row animate-slidein1000 p-4 opacity-0 mx-1 sm:mx-2 h-8  items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r bg-slate-700 dark:bg-slate-700  hover:bg-slate-600 dark:hover:bg-slate-800 text-xs sm:text-sm font-medium tracking-wide hover:cursor-pointer text-white shadow-md focus:shadow-sm dark:disabled:bg-blue-950 disabled:border-slate-500 disabled:bg-slate-500  disabled:shadow-none`}
      >
        {Icon && <Icon className="text-white" />}
        {label}
      </button>
    </div>
  );
};
export default BtnSlate;
