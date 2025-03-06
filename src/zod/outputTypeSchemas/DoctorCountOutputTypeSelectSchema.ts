import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DoctorCountOutputTypeSelectSchema: z.ZodType<Prisma.DoctorCountOutputTypeSelect> = z
  .object({
    working_days: z.boolean().optional(),
    appointments: z.boolean().optional(),
    ratings: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
  })
  .strict();

export default DoctorCountOutputTypeSelectSchema;
