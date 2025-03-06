import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServicesCreateNestedOneWithoutLabtestInputSchema } from './ServicesCreateNestedOneWithoutLabtestInputSchema';

export const LabTestCreateWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestCreateWithoutMedical_recordInput> =
  z
    .object({
      test_date: z.coerce.date(),
      result: z.string(),
      status: z.string(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestInputSchema),
    })
    .strict();

export default LabTestCreateWithoutMedical_recordInputSchema;
