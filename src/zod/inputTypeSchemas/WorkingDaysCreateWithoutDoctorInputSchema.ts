import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const WorkingDaysCreateWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysCreateWithoutDoctorInput> =
  z
    .object({
      day: z.string(),
      start_time: z.string(),
      close_time: z.string(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default WorkingDaysCreateWithoutDoctorInputSchema;
