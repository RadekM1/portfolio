"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/src/i18n/routing";

export default function LocaleSwitch() {
  const t = useTranslations("Nav.LocaleSwitch");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === "cs" ? "en" : "cs";

  // Router z next-intl při změně jazyka vynucuje prefix ("/cs"), což stojí redirect
  // přes middleware. "/" je díky localeDetection: false vždy česky, takže stačí cesta bez něj.
  const href = getPathname({ href: pathname, locale: nextLocale });

  // Druhý jazyk se stáhne dopředu – přepnutí pak nečeká na Netlify funkci (cold start)
  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  return (
    <button
      aria-label={t("aria")}
      onClick={() => router.replace(href, { scroll: false })}
      className="p-1 px-2 border-[1px] rounded-lg border-gray-300 dark:border-gray-600 text-sm font-semibold ease-in-out duration-300 transition-all text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
    >
      {t("label")}
    </button>
  );
}
