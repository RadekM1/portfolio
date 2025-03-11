import LandingPageANim from "../landingPageAnim";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="flex flex-col  dark:bg-slate-900 items-center font-roboto  text-gray-600 font-semibold "
    >
      <div
        className={`flex h-screen text-[2rem] flex-grow text-center  w-full flex-col items-center sm:items-start`}
      >
        <div className="flex flex-col items-center biggerLgBreak:flex-row w-full flex-grow justify-center">
          <div
            className={`dark:bg-[linear-gradient(to_right,#162038_1px,transparent_1px),linear-gradient(to_bottom,#162038_1px,transparent_1px)] bg-[linear-gradient(to_right,#f5f6f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f6f7_1px,transparent_1px)] dark:bg-[length:24px_24px] bg-[length:24px_24px] z-0 absset-0 w-full overflow-hidden absolute h-full`}
            style={{ maskImage: "linear-gradient(transparent, #FAF9F6)" }}
          ></div>
          <div className="w-full flex-grow flex-col  flex justify-center  text-center items-center short:my-0 mt-5 sm:my-0 h-2/5 short:h-full lg:h-full ">
            <div className="flex flex-col  md:text-start md:w-[500px] w-full">
              <span className="flex mt-2 animate-slidein500 opacity-0 whitespace-nowrap justify-center items-center mb-2 md:mb-5 text-3xl sm:text-4xl md:text-5xl w-full flex-grow lg:text-5xl dark:text-white z-20 bg-gradient-to-l text-gray-600">
                Vývoj
                <span className="text-rose-500">&nbsp;webových aplikací</span>
              </span>
              <span className="z-10 mb-2 opacity-0 text-xs sm:text-base animate-slidein1000 dark:text-gray-300 font-thin mx-2  md:text-base text-center">
                Od jednoduchých webů po automatizaci enterprise procesů
              </span>
            </div>
            <div className="flex flex-row z-20 mt-2 lg:mt-10 justify-between">
              <div className="flex hover:-translate-y-1 ease-in-out duration-500">
                <a
                  href="#offer"
                  className="animate-slidein1000 opacity-0 inline-flex mx-2 ml-2 h-8 lg:h-12  items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-500 hover:to-rose-600 px-4 text-sm md:text-xl font-medium tracking-wide hover: text-white shadow-md focus:shadow-sm   disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300  disabled:shadow-none"
                >
                  Nabídka
                </a>
              </div>
              <div className="flex hover:-translate-y-1 ease-in-out duration-500">
                <a
                  href="#contact"
                  className="animate-slidein1000  opacity-0 inline-flex mx-2 lg:mb-32 xl:mb-10 h-8 lg:h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-green-500 px-6  font-medium tracking-wide text-white shadow-lg shadow-green-200 dark:shadow-none text-sm md:text-xl transition duration-300 hover:from-green-500 hover:to-green-600 bg-gradient-to-r hover:shadow-md hover:shadow-green-200 focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none"
                >
                  Konzultace zdarma
                </a>
              </div>
            </div>
          </div>
          <LandingPageANim />
          <div className="absolute top-[40%] right-[10%] z-0 blur-[50px] sm:blur-[80px] md:blur-[150px] lg:blur-[200px] bg-green-200 dark:bg-blue-900 ease-in-out transition delay-300 duration-500 overflow-hidden  w-[30%] h-[50%]"></div>
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
