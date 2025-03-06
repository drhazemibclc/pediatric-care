import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MedicalRecordsCreateManyPatientInputSchema: z.ZodType<Prisma.MedicalRecordsCreateManyPatientInput> =
  z
    .object({
      id: z.number().int().optional(),
      appointment_id: z.number().int(),
      doctor_id: z.string(),
      treatment_plan: z.string().optional().nullable(),
      prescriptions: z.string().optional().nullable(),
      lab_request: z.string().optional().nullable(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default MedicalRecordsCreateManyPatientInputSchema;
