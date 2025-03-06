import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DiagnosisUncheckedCreateInputSchema: z.ZodType<Prisma.DiagnosisUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      patient_id: z.string(),
      medical_id: z.number().int(),
      doctor_id: z.string(),
      symptoms: z.string(),
      diagnosis: z.string(),
      notes: z.string().optional().nullable(),
      prescribed_medications: z.string().optional().nullable(),
      follow_up_plan: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default DiagnosisUncheckedCreateInputSchema;
