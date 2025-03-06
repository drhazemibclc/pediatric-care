import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateNestedOneWithoutLab_testInputSchema } from './MedicalRecordsCreateNestedOneWithoutLab_testInputSchema';
import { ServicesCreateNestedOneWithoutLabtestInputSchema } from './ServicesCreateNestedOneWithoutLabtestInputSchema';

export const LabTestCreateInputSchema: z.ZodType<Prisma.LabTestCreateInput> = z
  .object({
    test_date: z.coerce.date(),
    result: z.string(),
    status: z.string(),
    notes: z.string().optional().nullable(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestInputSchema),
    medical_record: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLab_testInputSchema),
  })
  .strict();

export default LabTestCreateInputSchema;
