import { ToggleDiv } from "../ui/second-page-ui/tooggle-div";
import { OfferDiv } from "../ui/second-page-ui/offer-div";
import { IconDiv } from "../ui/second-page-ui/icons-div";
import { ThemesDiv } from "../ui/second-page-ui/themes-div";
import { PilanaIcon } from "../icon-components/pilana-icon";
import { TonIcon } from "../icon-components/ton-icon";
import { KhsIcon } from "../icon-components/khs-icon";
import { FaArrowRight } from "react-icons/fa";

const SecondPage = () => {
  return (
    <section
      id="offer"
      className="flex-col  relative p-4 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 gap-10 py-12 md:py-24 flex w-full justify-center items-center border-t-[1px]  dark:border-t-gray-800 bg-gray-100  z-10"
    >
      <div className="lg:flex gap-10 lg:gap-20   justify-items-center p-4 lg:0  items-center justify-center grid grid-cols-2 text-center lg:flex-row">
        <PilanaIcon className="h-10 text-[#14133B] max-w-[200px] dark:text-white w-30" />
        <TonIcon className="dark:text-white h-10 max-w-[200px] text-black" />
        <KhsIcon className="dark:text-white h-10 max-w-[200px] text-black" />
        <KhsIcon className="dark:text-white h-10 max-w-[200px] text-black" />
      </div>
      <a href="#reference" className="flex lg:my-6 mb-10 lg:mb-24 flex-row group whitespace-nowrap">
          <span className="flex self-center">další reference</span>
          <FaArrowRight className="h-full flex self-center ml-2 ease-in-out transition-transform duration-500 group-hover:rotate-90 w-full" />
      </a>
      <div className="flex flex-col  lg:justify-between lg:flex-row gap-10 w-full flex-grow max-w-5xl">
        <OfferDiv />
        <ToggleDiv />
      </div>
      <div className="flex flex-col self-center justify-center items-center lg:flex-row lg:gap-20  w-full flex-grow max-w-5xl">
        <ThemesDiv />
        <IconDiv />
      </div>
    </section>
  );
};
export default SecondPage;
