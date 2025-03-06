import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const VitalSignsCreateManyMedicalInputSchema: z.ZodType<Prisma.VitalSignsCreateManyMedicalInput> =
  z
    .object({
      id: z.number().int().optional(),
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
    })
    .strict();

export default VitalSignsCreateManyMedicalInputSchema;
