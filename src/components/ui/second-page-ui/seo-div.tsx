import { H3Title } from "../../typography/h3-title";

export const SeoDiv = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-10 drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700/50 p-4 rounded-xl border-gray-300 dark:bg-slate-900 self-center">
      <div className="flex flex-col">
        <H3Title title="Absolutní optimalizace" />
        <p className="text-sm lg:text-base pt-2 max-w-[600px] flex text-start lg:self-start self-center">
          SEO a celkově optimalizace webu není jen o tom vybrat klíčová slova na
          wordpressu. Google a další vyhledávače vyhodnocují i technické
          provedení, responzivní design, přizpůsobení pro různé čtečky atd.
          Můžete si sami otestovat přes Váš prohlížeč, například Chrome.
          Zmáčkněte klávesu F12, vyberte v menu Lighthouse a zkuste spustit
          výkonostní test, například na některé stránce co nabízí SEO marketing
          a optimalizaci 🙂
        </p>
      </div>
      <div className={`text-base self-center flex   `}>
        <img
          src="/img/SEO-light.webp"
          loading="lazy"
          className="border-[1px] border-gray-300 rounded-xl dark:hidden block"
          alt="SEO optimalizace webu"
        />
        <img
          src="/img/SEO-dark.webp"
          loading="lazy"
          className="border-[1px] border-gray-600 hidden dark:block rounded-xl"
          alt="SEO optimalizace webu"
        />
      </div>
    </div>
  );
};
