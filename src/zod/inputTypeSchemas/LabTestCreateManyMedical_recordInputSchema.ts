import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const LabTestCreateManyMedical_recordInputSchema: z.ZodType<Prisma.LabTestCreateManyMedical_recordInput> =
  z
    .object({
      id: z.number().int().optional(),
      test_date: z.coerce.date(),
      result: z.string(),
      status: z.string(),
      notes: z.string().optional().nullable(),
      service_id: z.number().int(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default LabTestCreateManyMedical_recordInputSchema;
