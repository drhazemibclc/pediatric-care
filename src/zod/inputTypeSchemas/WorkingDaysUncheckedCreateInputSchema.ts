import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const WorkingDaysUncheckedCreateInputSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      doctor_id: z.string(),
      day: z.string(),
      start_time: z.string(),
      close_time: z.string(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default WorkingDaysUncheckedCreateInputSchema;
