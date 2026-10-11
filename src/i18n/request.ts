import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import type { Messages } from "./types";
import csLayout from "./messages/cs/layout.json";
import csLanding from "./messages/cs/landing.json";
import csOffer from "./messages/cs/offer.json";
import csReferences from "./messages/cs/references.json";
import csSteps from "./messages/cs/steps.json";
import csAbout from "./messages/cs/about.json";
import csContact from "./messages/cs/contact.json";
import enLayout from "./messages/en/layout.json";
import enLanding from "./messages/en/landing.json";
import enOffer from "./messages/en/offer.json";
import enReferences from "./messages/en/references.json";
import enSteps from "./messages/en/steps.json";
import enAbout from "./messages/en/about.json";
import enContact from "./messages/en/contact.json";

import { routing, type Locale } from "./routing";

const messagesByLocale: Record<Locale, Messages> = {
  cs: {
    ...csLayout,
    ...csLanding,
    ...csOffer,
    ...csReferences,
    ...csSteps,
    ...csAbout,
    ...csContact,
  },
  en: {
    ...enLayout,
    ...enLanding,
    ...enOffer,
    ...enReferences,
    ...enSteps,
    ...enAbout,
    ...enContact,
  },
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return { locale, messages: messagesByLocale[locale] };
});
