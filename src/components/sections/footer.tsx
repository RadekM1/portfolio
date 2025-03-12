import { FooterMain } from "../ui/footer";

const Footer = () => {
  return (
    <section className="w-full flex flex-col pb-16 pt-16 justify-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 dark:bg-slate-900 bg-white z-10">
      <FooterMain />
      <div className="py-4 text-sm px-6 text-end w-full border-t">
        © 2025 Radek Morong
      </div>
    </section>
  );
};
export default Footer;
