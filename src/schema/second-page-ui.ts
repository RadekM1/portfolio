import { z } from "zod";
import { IconType } from "react-icons/lib";

export const toggleSchema = z.object({
  icon: z.custom<IconType>(),
  title: z.string(),
  summary: z.string(),
});

export const iconSchema = z.object({
  icon: z.custom<IconType>().nullable(),
  title: z.string(),
});

export type ToggleSchema = z.infer<typeof toggleSchema>;

export type IconSchema = z.infer<typeof iconSchema>;
