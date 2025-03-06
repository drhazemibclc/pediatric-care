import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const LabTestCreateManyInputSchema: z.ZodType<Prisma.LabTestCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    record_id: z.number().int(),
    test_date: z.coerce.date(),
    result: z.string(),
    status: z.string(),
    notes: z.string().optional().nullable(),
    service_id: z.number().int(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export default LabTestCreateManyInputSchema;
