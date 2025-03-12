import { H3Title } from "../../typography/h3-title";

export const SeoDiv = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-10 self-center">
      <div className="flex items-start flex-col">
        <H3Title title="Optimalizace" />
        <p className="text-sm lg:text-base pt-2 max-w-[600px] flex text-start lg:self-start self-center">
          SEO a celkově optimalizace webu není jen o tom vybrat klíčová slova na
          Wordpressu a naklikat zpětné odkazy. Google a další vyhledávače
          vyhodnocují i technické provedení, responzivní design, přizpůsobení
          pro různé čtečky atd. Můžete si sami otestovat přes Váš prohlížeč na
          počítači, například v Google Chrome. Zmáčkněte klávesu F12, vyberte v
          menu Lighthouse a zkuste spustit výkonostní test, například na některé
          stránce co nabízí SEO marketing a optimalizaci 🙂
        </p>
      </div>
      <div className={`text-base flex-col self-center flex   `}>
        <img
          src="/img/SEO-light.webp"
          loading="lazy"
          className="border-[1px] py-4 border-gray-300 drop-shadow-xl dark:drop-shadow-none rounded-xl dark:hidden block"
          alt="SEO optimalizace webu"
        />
        <img
          src="/img/SEO-dark.webp"
          loading="lazy"
          className="border-[1px] border-gray-600 hidden dark:block rounded-xl"
          alt="SEO optimalizace webu"
        />
        <p className="mt-5 text-sm">zdroj: Google chrome prohlížeč</p>
      </div>
    </div>
  );
};
