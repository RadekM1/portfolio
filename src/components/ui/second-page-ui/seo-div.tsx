import { useTranslations } from "next-intl";
import { H3Title } from "../../typography/h3-title";
import Link from "next/link";

export const SeoDiv = () => {
  const t = useTranslations("Offer.Seo");
  return (
    <div className="flex flex-col overflow-hidden md:flex-row w-full gap-5 lg:gap-10 self-center">
      <div className="flex w-full items-center flex-col">
        <H3Title title={t("title")} />
        <p className="text-sm md:text-base pt-2 px-2 max-w-[600px]  flex-col text-start  self-center">
          {t.rich("text", {
            link: (chunks) => (
              <Link
                className="underline"
                target="_blank"
                href="https://pagespeed.web.dev/"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
      <div className={`text-base items-center flex-col w-full self-start flex`}>
        <img
          src="/img/SEO-light.webp"
          loading="lazy"
          className=" drop-shadow-xl  py-5  bg-white border-[1px] border-gray-300 max-w-[90%] lg:max-w-[500px] dark:drop-shadow-none rounded-xl dark:hidden block"
          alt={t("imageAlt")}
        />
        <img
          src="/img/SEO-dark.webp"
          loading="lazy"
          className="  max-w-[90%] lg:max-w-[500px] py-5 bg-slate-800  border-[1px] border-gray-700 hidden dark:block rounded-xl"
          alt={t("imageAlt")}
        />
        <p className="mt-5 text-sm">{t("source")}</p>
      </div>
    </div>
  );
};
