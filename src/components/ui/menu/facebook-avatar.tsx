"use client";

interface AvatarProps {
  // eslint-disable-next-line
  setIsSideNavOpen: (isSideNavOpen: boolean) => void
}

export const FacebookAvatar = ({ setIsSideNavOpen }: AvatarProps) => {
  const date = new Date().getHours();

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
              className={` ${date >= 7 && date < 20 && "bg-green-500"} ${date >= 20 && date < 23 && "bg-orange-500"} ${(date >= 23 || date < 7) && "bg-red-600"} absolute bottom-0 right-0 inline-flex items-start justify-start gap-1 rounded-full border-2 border-white  p-1 text-sm text-white`}
            >
              <span className="sr-only"> online </span>
            </span>
          </div>
        </div>
        <div className="flex min-h-[2rem] w-full min-w-0 flex-col gap-0 text-start">
          <h4 className="w-full truncate  text-base text-slate-700 dark:text-white">
            Radek Morong
          </h4>
          <p className="text-gray-500 mt-1">nová zpráva...</p>
        </div>
      </div>
    </a>
  );
};
