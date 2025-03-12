import Logo from "./menu/logo";
import { RiContractFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const FooterMain = () => {
  return (
    <>
      <footer className="w-full flex self-center px-2 items-center flex-col ">
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 pb-10 lg:grid-cols-4 justify-items-center gap-4 sm:gap-x-10 lg:gap-x-20 gap-y-10  text-start ">
          <li className="flex gap-4 w-full flex-row">
            <Logo />
            <ul className="text-sm mt-3  text-start">
              <li>Radek Morong</li>
              <li>Wolkerova 959</li>
              <li>768 24 Hulín</li>
            </ul>
          </li>
          <li className="flex flex-row mt-3 w-full mb-4 flex-nowrap">
            <RiContractFill className="w-8 flex self-start h-8 mr-3" />
            <span className="flex-col flex">
              <span>IČO: 76508986</span>
              <span>Jsem neplátce DPH</span>
            </span>
          </li>
          <li className="flex mb-4 w-full lg:mt-3 flex-row flex-nowrap">
            <MdEmail className="w-8 flex mr-3 self-start h-8" />
            <a className="flex self-start" href="email:radekmorong@email.cz">
              radekmorong@email.cz
            </a>
          </li>
          <li className="flex mb-4 w-full lg:mt-3 flex-row flex-nowrap">
            <FaPhone className="w-8 p-1 flex mr-3 self-start h-8" />
            <a className="flex self-start" href="tel:+420725912857">
              +420 725 912 857
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
