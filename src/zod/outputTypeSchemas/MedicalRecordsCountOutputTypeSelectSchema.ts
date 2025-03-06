import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MedicalRecordsCountOutputTypeSelectSchema: z.ZodType<Prisma.MedicalRecordsCountOutputTypeSelect> =
  z
    .object({
      lab_test: z.boolean().optional(),
      vital_signs: z.boolean().optional(),
      diagnosis: z.boolean().optional(),
    })
    .strict();

export default MedicalRecordsCountOutputTypeSelectSchema;
