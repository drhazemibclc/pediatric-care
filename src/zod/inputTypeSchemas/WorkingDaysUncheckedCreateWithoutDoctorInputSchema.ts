import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const WorkingDaysUncheckedCreateWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateWithoutDoctorInput> =
  z
    .object({
      id: z.number().int().optional(),
      day: z.string(),
      start_time: z.string(),
      close_time: z.string(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default WorkingDaysUncheckedCreateWithoutDoctorInputSchema;
