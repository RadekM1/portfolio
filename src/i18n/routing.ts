import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["cs", "en"] as const,

  defaultLocale: "cs",

  // čeština zůstává na "/", angličtina na "/en"
  localePrefix: "as-needed",
});

export const { Link, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof routing)["locales"][number];
