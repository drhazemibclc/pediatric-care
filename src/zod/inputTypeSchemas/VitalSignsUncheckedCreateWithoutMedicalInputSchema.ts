import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const VitalSignsUncheckedCreateWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsUncheckedCreateWithoutMedicalInput> =
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

export default VitalSignsUncheckedCreateWithoutMedicalInputSchema;
