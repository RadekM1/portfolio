import { useTranslations } from "next-intl";
import { H2title } from "../typography/h2-title";
import { H3Title } from "../typography/h3-title";
import ContactForm from "../form/form";

const Form = () => {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="flex-col flex relative overflow-hidden  w-full justify-center text-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 bg-gray-100 dark:bg-slate-950 z-10"
    >
      <H2title title={t("title")} />

      <div className="flex flex-col w-full max-w-[1000px] md:flex-row">
        <div className="flex max-w-[250px] self-center md:self-start md:max-w-[300px] px-5 object-contain">
          <img
            className=" object-scale-down m-4  self-center"
            src="/vector/spoluprace.svg"
            alt={t("imageAlt")}
          />
        </div>
        <div className="flex-col px-10 items-start w-full flex">
          <H3Title title={t("subtitle")} />
          <p className="text-start ">{t("text")}</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
export default Form;
