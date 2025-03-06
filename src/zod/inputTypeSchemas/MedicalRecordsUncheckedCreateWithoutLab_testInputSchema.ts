import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema';
import { VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema';

export const MedicalRecordsUncheckedCreateWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutLab_testInput> =
  z
    .object({
      id: z.number().int().optional(),
      patient_id: z.string(),
      appointment_id: z.number().int(),
      doctor_id: z.string(),
      treatment_plan: z.string().optional().nullable(),
      prescriptions: z.string().optional().nullable(),
      lab_request: z.string().optional().nullable(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      vital_signs: z
        .lazy(() => VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema)
        .optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema)
        .optional(),
    })
    .strict();

export default MedicalRecordsUncheckedCreateWithoutLab_testInputSchema;
