import { z } from "zod";
import { IconType } from "react-icons/lib";

export const menuSchema = z.array(
  z.object({
    label: z.string(),
    link: z.string(),
    icon: z.custom<IconType>(),
  }),
);

export type MenuSchema = z.infer<typeof menuSchema>;
