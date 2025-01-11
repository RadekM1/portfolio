const SecondPage = () => {
  return (
    <section className="flex-col flex h-screen w-full justify-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 bg-black z-10">
      <div className="flex flex-col  md:flex-row  w-full flex-grow max-w-7xl my-10">
        <div className=" bg-gray-600 my-2 mx-2 md:w-8/12 ">
          Webové aplikace
          <br />
          Webové stránky
          <br />
        </div>
        <div className=" bg-gray-500 my-2 mx-2 md:w-4/12">
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
      <div className="flex h-72 bg-gray-900 h-1/2 text-center justify-center w-full mb-2 mx-2 max-w-7xl">
        Nový standard pro 21. století <br />
        weby na technologiích které využívá Netflix, Instagram, Facebook,
        ChatGPT, Airbnb atd.
      </div>
    </section>
  );
};
export default SecondPage;
