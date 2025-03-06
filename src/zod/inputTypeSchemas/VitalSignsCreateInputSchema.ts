import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateNestedOneWithoutVital_signsInputSchema } from './MedicalRecordsCreateNestedOneWithoutVital_signsInputSchema';

export const VitalSignsCreateInputSchema: z.ZodType<Prisma.VitalSignsCreateInput> = z
  .object({
    patient_id: z.string(),
    body_temperature: z.number(),
    systolic: z.number().int(),
    diastolic: z.number().int(),
    heartRate: z.string(),
    respiratory_rate: z.number().int().optional().nullable(),
    oxygen_saturation: z.number().int().optional().nullable(),
    weight: z.number(),
    height: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutVital_signsInputSchema),
  })
  .strict();

export default VitalSignsCreateInputSchema;
