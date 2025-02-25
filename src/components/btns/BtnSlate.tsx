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
    <div className="flex hover:-translate-y-1 transition-transform ease-in-out duration-300  will-change-transform">
      <button
        disabled={isActive === index}
        onClick={() => setIsActive(index)}
        className={`flex flex-row animate-slidein1000 p-4 opacity-0 mx-1 ${index === 0 ? "bg-rose-300 dark:disabled:bg-slate-700 disabled:bg-rose-600 dark:bg-slate-700  hover:bg-rose-400" : "bg-green-300 disabled:bg-green-700 dark:bg-slate-800 hover:dark:bg-slate-700  hover:bg-green-400"} sm:mx-2 h-10  items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r disabled:cursor-default dark:hover:bg-slate-800 text-xs sm:text-sm font-medium tracking-wide hover:cursor-pointer text-white shadow-md focus:shadow-sm   disabled:shadow-none`}
      >
        {Icon && <Icon className="text-white" />}
        {label}
      </button>
    </div>
  );
};
export default BtnSlate;
