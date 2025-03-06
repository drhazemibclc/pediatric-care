import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema } from './MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema';

export const DiagnosisCreateWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisCreateWithoutDoctorInput> =
  z
    .object({
      patient_id: z.string(),
      symptoms: z.string(),
      diagnosis: z.string(),
      notes: z.string().optional().nullable(),
      prescribed_medications: z.string().optional().nullable(),
      follow_up_plan: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema),
    })
    .strict();

export default DiagnosisCreateWithoutDoctorInputSchema;
