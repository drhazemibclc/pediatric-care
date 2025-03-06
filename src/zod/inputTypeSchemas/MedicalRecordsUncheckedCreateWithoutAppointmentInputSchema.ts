import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema';
import { LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema';
import { VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema';

export const MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutAppointmentInput> =
  z
    .object({
      id: z.number().int().optional(),
      patient_id: z.string(),
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
      vital_signs: z
        .lazy(() => VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema)
        .optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema)
        .optional(),
    })
    .strict();

export default MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema;
