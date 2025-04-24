"use client";

import { useEffect, useState } from "react";

interface AvatarProps {
  // eslint-disable-next-line
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

export const FacebookAvatar = ({ setIsSideNavOpen }: AvatarProps) => {
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date().getHours();
    setHour(now);
  }, []);

  let bgColor = "bg-red-600"; // výchozí
  if (hour !== null) {
    if (hour >= 7 && hour < 20) bgColor = "bg-green-500";
    else if (hour >= 20 && hour < 23) bgColor = "bg-orange-500";
    else bgColor = "bg-red-600";
  }

  return (
    <a
      href="https://www.facebook.com/radek.morong"
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => setIsSideNavOpen(false)}
    >
      <div className="flex flex-row items-start gap-4 border-t dark:border-slate-600 border-slate-200 py-6 p-3">
        <div className="shrink-0 flex-row">
          <div className="relative flex h-12 w-12 items-start justify-center rounded-full text-white">
            <img
              src="/avatar_rm.jpg"
              alt="user name"
              title="user name"
              width="48"
              height="48"
              className="max-w-full rounded-full"
            />
            <span
              className={`${bgColor} absolute bottom-0 right-0 inline-flex items-start justify-start gap-1 rounded-full border-2 border-white p-1 text-sm text-white`}
            >
              <span className="sr-only"> online </span>
            </span>
          </div>
        </div>
        <div className="flex min-h-[2rem] w-full min-w-0 flex-col gap-0 text-start">
          <h3 className="w-full truncate text-base text-slate-700 dark:text-white">
            Radek Morong
          </h3>
          <p className="text-gray-500 mt-1">nová zpráva...</p>
        </div>
      </div>
    </a>
  );
};
