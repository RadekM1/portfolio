import { RInLogo } from "../../icon-components/r-in-logo";
import { MInLogo } from "../../icon-components/m-in-logo";

const Logo = () => {
  return (
    <a
      aria-label="Radek Morong logo"
      aria-current="page"
      className="flex items-center flex-row object-contain  whitespace-nowrap py-3 text-lg focus:outline-none"
      href="#home"
    >
      <RInLogo className="ml-1 h-8 w-8 flex self-center text-rose-500 " />
      <MInLogo className="h-8 w-8 flex self-end text-gray-700 dark:text-white " />
    </a>
  );
};

export default Logo;
