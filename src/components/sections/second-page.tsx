


import { ToggleDiv } from "../ui/second-page-ui/tooggle-div";
import { OfferDiv } from "../ui/second-page-ui/offer-div";

const SecondPage = () => {
  return (
    <section className="flex-col p-2 flex gap-10 py-20 h-screen w-full justify-center items-center border-t-[1px]  dark:border-t-gray-800 bg-gray-200 dark:bg-slate-950 z-10">
      
      <div className="flex flex-col   md:flex-row gap-10 w-full flex-grow max-w-7xl">
        

        <OfferDiv />
        <ToggleDiv />
      </div>
      
      <div className="flex h-72  text-base border-t-gray-300 drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700 p-4 rounded-xl border-gray-300 dark:bg-slate-900 text-center justify-center w-full max-w-7xl">
        Nový standard pro 21. století <br />
        weby na technologiích které využívá Netflix, Instagram, Facebook,
        ChatGPT, Airbnb atd.
      </div>
    </section>
  );
};
export default SecondPage;
