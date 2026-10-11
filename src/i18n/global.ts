import "next-intl";
import type { Messages } from "./types";

import { routing } from "./routing";

declare module "next-intl" {
  // eslint-disable-next-line no-unused-vars -- rozšíření typů next-intl
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
