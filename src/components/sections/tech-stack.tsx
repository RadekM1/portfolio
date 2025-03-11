import TechStackMain from "../techStackMain";

const TechStack = () => {
  return (
    <section
      id="stack"
      className="flex-col overflow-hidden relative px-2 flex min-h-screen w-full justify-center text-center items-center border-t-[1px] border-t-gray-300 dark:bg-slate-950 dark:border-t-gray-700 bg-gray-100 z-10"
    >
      <div
        className={`dark:bg-[linear-gradient(to_right,#161038_1px,transparent_1px),linear-gradient(to_bottom,#161038_1px,transparent_1px)] bg-[linear-gradient(to_right,#f5f6f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f6f7_1px,transparent_1px)] dark:bg-[length:24px_24px] bg-[length:24px_24px] z-0 absset-0 w-full overflow-hidden absolute h-full`}
        style={{ maskImage: "linear-gradient(transparent, #FAF9F6)" }}
      ></div>
      <div className="absolute dark:bg-indigo-800/40 w-[50%] h-[9%] blur-3xl top-10 -right-44 rotate-12"></div>
      <div className="absolute dark:bg-indigo-800/60 w-[10%] h-[5%] blur-3xl top-10 right-0 rotate-12"></div>
      <div className="absolute dark:bg-blue-800/40 w-[70%] h-[10%] blur-[80px] bottom-0 left-0 -rotate-[20deg]"></div>
      <div className="absolute dark:bg-indigo-800/40 w-[50%] h-[10%] blur-3xl bottom-44 -right-10 -rotate-[20deg]"></div>
      <TechStackMain />
    </section>
  );
};
export default TechStack;
