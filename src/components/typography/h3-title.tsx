interface H3props {
  title: string;
  isPadding: boolean;
}

export const H3title = ({ title, isPadding }: H3props) => {
  return (
    <h3
      className={`
        text-base text-start ${isPadding && "px-10 p-4"}  sm:text-xl md:text-2xl 
            bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-600
            dark:from-slate-300 dark:via-violet-300  dark:to-zinc-100 dark:bg-gradient-to-bl
            bg-clip-text text-transparent`}
    >
      {title}
    </h3>
  );
};
