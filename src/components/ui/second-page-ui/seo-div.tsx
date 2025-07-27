import { H3Title } from "../../typography/h3-title";
import Link from "next/link";

export const SeoDiv = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row w-full gap-5 lg:gap-10 self-center">
      <div className="flex w-full items-center flex-col">
        <H3Title title="Optimalizace" />
        <p className="text-sm md:text-base pt-2 px-2 max-w-[600px]  flex-col text-start  self-center">
          SEO a celkově optimalizace webu není jen o tom vybrat klíčová slova na
          Wordpressu a naklikat zpětné odkazy. Google a další vyhledávače
          vyhodnocují i technické provedení, responzivní design, přizpůsobení
          pro různé čtečky atd. Můžete si sami otestovat na{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://pagespeed.web.dev/"
          >
            pagespeed.web.dev/
          </Link>
          . Například na některé stránce co nabízí SEO marketing a optimalizaci
          🙂
        </p>
      </div>
      <div className={`text-base items-center flex-col w-full self-start flex`}>
        <img
          src="/img/SEO-light.webp"
          loading="lazy"
          className=" drop-shadow-xl  py-5  bg-white border-[1px] border-gray-300 max-w-[90%] lg:max-w-[500px] dark:drop-shadow-none rounded-xl dark:hidden block"
          alt="SEO optimalizace webu"
        />
        <img
          src="/img/SEO-dark.webp"
          loading="lazy"
          className="  max-w-[90%] lg:max-w-[500px] py-5 bg-slate-800  border-[1px] border-gray-700 hidden dark:block rounded-xl"
          alt="SEO optimalizace webu"
        />
        <p className="mt-5 text-sm">zdroj: Google Lighthouse</p>
      </div>
    </div>
  );
};
