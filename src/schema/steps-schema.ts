import { z } from "zod";

export const stepSchema = z.object({
  title: z.string(),
  summaryText: z.string(),
  img: z.string(),
});

export const stepsSchema = z.array(stepSchema);

export type StepSchema = z.infer<typeof stepSchema>;
export type StepsSchema = z.infer<typeof stepsSchema>;
