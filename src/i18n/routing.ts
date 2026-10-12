import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["cs", "en"] as const,

  defaultLocale: "cs",

  // čeština zůstává na "/", angličtina na "/en"
  localePrefix: "as-needed",

  // "/" vždy česky – nepřesměrovávat podle Accept-Language ani cookie NEXT_LOCALE
  localeDetection: false,

  // cookie by se bez detekce jazyka k ničemu nepoužila, jen by přidávala Set-Cookie do odpovědí
  localeCookie: false,
});

export const { Link, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof routing)["locales"][number];
