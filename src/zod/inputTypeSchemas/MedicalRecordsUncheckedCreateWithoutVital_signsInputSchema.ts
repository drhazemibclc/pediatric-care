import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema';
import { LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema';

export const MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutVital_signsInput> =
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
      lab_test: z
        .lazy(() => LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema)
        .optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema)
        .optional(),
    })
    .strict();

export default MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema;
