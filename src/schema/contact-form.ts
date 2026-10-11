import { z } from "zod";

// chybové zprávy jsou klíče do Contact.Errors v jazykových JSONech
export const formSchema = z.object({
  name: z.string().trim().min(2, "tooShort"),
  email: z.string().email("invalidEmail"),
  tel: z.string().trim().min(9, "tooShort"),
  note: z.string().trim().min(2, "noteRequired"),
});

export type FormSchema = z.infer<typeof formSchema>;
