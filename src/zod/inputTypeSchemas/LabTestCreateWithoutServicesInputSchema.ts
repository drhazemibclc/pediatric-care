import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateNestedOneWithoutLab_testInputSchema } from './MedicalRecordsCreateNestedOneWithoutLab_testInputSchema';

export const LabTestCreateWithoutServicesInputSchema: z.ZodType<Prisma.LabTestCreateWithoutServicesInput> =
  z
    .object({
      test_date: z.coerce.date(),
      result: z.string(),
      status: z.string(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      medical_record: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLab_testInputSchema),
    })
    .strict();

export default LabTestCreateWithoutServicesInputSchema;
