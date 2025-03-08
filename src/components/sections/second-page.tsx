import { ToggleDiv } from "../ui/second-page-ui/tooggle-div";
import { OfferDiv } from "../ui/second-page-ui/offer-div";
import { IconDiv } from "../ui/second-page-ui/icons-div";
import { ThemesDiv } from "../ui/second-page-ui/themes-div";

const SecondPage = () => {
  return (
    <section className="flex-col relative p-4 gap-10 py-24 flex w-full justify-center items-center border-t-[1px]  dark:border-t-gray-800 bg-gray-100 dark:bg-slate-950 z-10">
      <div className="flex flex-col   md:flex-row gap-10 w-full flex-grow max-w-7xl">
        <OfferDiv />
        <ToggleDiv />
      </div>
      <div className="flex flex-col self-center justify-center items-center md:flex-row lg:gap-20  w-full flex-grow max-w-7xl">
        <ThemesDiv />
        <IconDiv />
      </div>
    </section>
  );
};
export default SecondPage;
