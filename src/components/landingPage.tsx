import { gridStyle } from "../lib/constants"
import LandingPageANim from "./landingPageAnim"

const LandingPage = () =>{
    return (
        <div className="flex relative flex-col lg:flex-row w-full flex-grow justify-center">
            <div
              style={{ maskImage: "linear-gradient(transparent, #FAF9F6)" }}
              className={gridStyle}
            ></div>
            <div className="w-full flex-grow flex-col  flex justify-center  text-center items-center h-2/3 lg:h-full ">
              <div className="flex flex-col  md:text-start md:w-[500px] w-full">
                <span className="flex mt-2 animate-slidein500 opacity-0 whitespace-nowrap justify-center items-center mb-2 md:mb-5 text-3xl sm:text-3xl md:text-4xl w-full flex-grow lg:text-5xl dark:text-white z-20 bg-gradient-to-l text-gray-600">
                  Vývoj
                  <span className="text-rose-500">&nbsp;webových aplikací</span>
                </span>
                <span className="z-10 mb-2 opacity-0 text-sm animate-slidein1000 dark:text-gray-300 font-thin mx-2 md:text-base text-center">
                  Od jednoduchých webů po automatizaci enterprise procesů
                </span>
              </div>
              <div className="flex flex-row z-20 mt-2 lg:mt-10 justify-between">
                <button className="animate-slidein1000 opacity-0 inline-flex mx-2 ml-2 h-8 lg:h-12  items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-500 hover:to-orange-700 px-4 text-sm md:text-xl font-medium tracking-wide hover: text-white shadow-md focus:shadow-sm   disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300  disabled:shadow-none">
                  Reference
                </button>
                <button className="animate-slidein1200 opacity-0 inline-flex mx-2 lg:mb-32 xl:mb-0 h-8 lg:h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-green-500 px-6  font-medium tracking-wide text-white shadow-lg shadow-green-200 dark:shadow-none text-sm md:text-xl transition duration-300 hover:bg-green-600 hover:shadow-md hover:shadow-green-200 focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none">
                  Konzultace zdarma
                </button>
              </div>
            </div>
            <LandingPageANim />
            <div className="absolute top-[40%] right-[10%] z-0 blur-[150px] bg-green-100 dark:bg-slate-700 overflow-hidden  w-[30%] h-[50%]"></div>
          </div>
    )
}
export default LandingPage