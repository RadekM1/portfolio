import { SectionTitle } from "../sectionTitle";
import { H3title } from "../ui/h3title";
import ContactForm from "../form/form";

const Form = () => {
  return (
    <section className="flex-col flex   w-full justify-center text-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 bg-gray-100 dark:bg-slate-950 z-10">
      <SectionTitle title="Kontakt" />

      <div className="flex flex-col w-full max-w-[1000px] md:flex-row">
        <div className="flex max-w-[250px] self-center md:self-start md:max-w-[300px] px-5 object-contain">
          <img
            className=" object-scale-down m-4  self-center"
            src="vector/spoluprace.svg"
            alt="obrázek spolupráce"
          />
        </div>
        <div className="flex-col w-full flex">
          <H3title title="Nezávazná poptávka" />
          <p className="text-start px-10">
            Pokud máte zájem o konzultaci zdarma neváhejte vyplnit formulář
            níže. Pokud zrovna nelítám někde na kopcích mimo signál, tak se ozvu
            nejpozději následující pracovní den. Chcete-li se se mnou spojit
            dříve a prodiskutovat možnosti napřímo, tak se neváhejte obrátit na
            můj facebook (odkaz níže), případně zavolejte na mobil.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
export default Form;
