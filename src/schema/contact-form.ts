import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(2, "nedostatečný počet znaků"),
  email: z.string().email("nevyhovující formát pro email"),
  tel: z.string().trim().min(9, "nedostatečný počet znaků"),
  note: z.string().trim().min(2, "co pro vás můžeme udělat?"),
});

export type FormSchema = z.infer<typeof formSchema>;
