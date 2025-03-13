import { ToggleDiv } from "../ui/second-page-ui/tooggle-div";
import { OfferDiv } from "../ui/second-page-ui/offer-div";
import { IconDiv } from "../ui/second-page-ui/icons-div";
import { ThemesDiv } from "../ui/second-page-ui/themes-div";
import { PilanaIcon } from "../icon-components/pilana-icon";
import { TonIcon } from "../icon-components/ton-icon";
import { KhsIcon } from "../icon-components/khs-icon";
import { FaArrowRight } from "react-icons/fa";
import { SeoDiv } from "../ui/second-page-ui/seo-div";

const SecondPage = () => {
  return (
    <section className="flex-col  relative p-4 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 gap-20 py-12 md:py-24 flex w-full justify-center items-center border-t-[1px]  dark:border-t-gray-800 bg-zinc-100  z-10">
      <div className="flex w-full justify-items-center items-center flex-col justify-center self-center">
        <div className="lg:flex gap-10 sm:gap-20   justify-items-center p-4 lg:0  items-center justify-center grid grid-cols-2 text-center lg:flex-row">
          <PilanaIcon className="lg:h-11 h-9 text-[#14133B] max-w-[170px] dark:text-white w-30" />
          <TonIcon className="dark:text-white h-9 lg:h-11 max-w-[170px] text-black" />
          <KhsIcon className="dark:text-white h-9 lg:h-11 max-w-[170px] text-black" />
          <div className="dark:text-white text-[19px] lg:text-[25px] lg:max-h-[35px] text-nowrap flex-row font-semibold font-roboto max-w-[150px] text-black">
            <span className="p-1 mr-2 rounded-md bg-gray-800 dark:bg-white text-white dark:text-black font-bold ">
              HH
            </span>
            <span>Haly Holešov</span>
          </div>
        </div>
        <a
          href="#reference"
          className=" lg:my-6 hidden lg:flex mb-10 h-9  flex-row group whitespace-nowrap"
        >
          <span id="offer" className="flex self-center">
            další reference
          </span>
          <FaArrowRight className="h-4 flex self-center ml-2 ease-in-out transition-transform duration-500 group-hover:rotate-90 w-full" />
        </a>
      </div>
      <div className="flex flex-col mt-[150px] lg:justify-between lg:flex-row gap-10 w-full flex-grow max-w-5xl">
        <OfferDiv />
        <ToggleDiv />
      </div>
      <div className="flex flex-col self-center pt-10 justify-center items-center lg:flex-row lg:gap-20  w-full flex-grow max-w-5xl">
        <ThemesDiv />
        <IconDiv />
      </div>
      <div className="flex flex-col mt-10 self-center justify-center items-center lg:flex-row lg:gap-20  w-full flex-grow max-w-5xl">
        <SeoDiv />
      </div>
    </section>
  );
};
export default SecondPage;
