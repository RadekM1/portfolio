const SecondPage = () => {
  return (
    <section className="flex-col flex gap-10 py-20 h-screen w-full justify-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 bg-black z-10">
      <div className="flex flex-col  md:flex-row gap-10 w-full flex-grow max-w-7xl">
        <div className=" text-base bg-white/40 border-[1px] rounded-xl border-white/20 dark:bg-slate-700/40 md:w-8/12 ">
          Webové aplikace
          <br />
          Webové stránky
          <br />
        </div>
        <div className="  bg-white/40 border-[1px] rounded-xl border-white/20 dark:bg-slate-700/40  md:w-4/12">
          Responzivní design
          <br />
          Webdesign na míru
          <br />
          Redakční systémy
          <br />
          Rychlé načítání
          <br />
          Bezpečnost
          <br />
        </div>
      </div>
      <div className="flex h-72  bg-white/40 border-[1px] rounded-xl border-white/20 dark:bg-slate-700/40 text-center justify-center w-full max-w-7xl">
        Nový standard pro 21. století <br />
        weby na technologiích které využívá Netflix, Instagram, Facebook,
        ChatGPT, Airbnb atd.
      </div>
    </section>
  );
};
export default SecondPage;
