"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/routing";

export default function LocaleSwitch() {
  const t = useTranslations("Nav.LocaleSwitch");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === "cs" ? "en" : "cs";

  return (
    <button
      aria-label={t("aria")}
      onClick={() =>
        router.replace(pathname, { locale: nextLocale, scroll: false })
      }
      className="p-1 px-2 border-[1px] rounded-lg border-gray-300 dark:border-gray-600 text-sm font-semibold ease-in-out duration-300 transition-all text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
    >
      {t("label")}
    </button>
  );
}
