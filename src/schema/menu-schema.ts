import { z } from "zod";
import { IconType } from "react-icons/lib";

export const menuSchema = z.array(
  z.object({
    key: z.enum(["offer", "reference", "steps", "about", "contact"]),
    link: z.string(),
    icon: z.custom<IconType>(),
  }),
);

export type MenuSchema = z.infer<typeof menuSchema>;
