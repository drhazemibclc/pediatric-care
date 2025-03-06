import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisCreateNestedManyWithoutMedicalInputSchema';
import { LabTestCreateNestedManyWithoutMedical_recordInputSchema } from './LabTestCreateNestedManyWithoutMedical_recordInputSchema';
import { PatientCreateNestedOneWithoutMedicalInputSchema } from './PatientCreateNestedOneWithoutMedicalInputSchema';
import { VitalSignsCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsCreateNestedManyWithoutMedicalInputSchema';

export const MedicalRecordsCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutAppointmentInput> =
  z
    .object({
      doctor_id: z.string(),
      treatment_plan: z.string().optional().nullable(),
      prescriptions: z.string().optional().nullable(),
      lab_request: z.string().optional().nullable(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      patient: z.lazy(() => PatientCreateNestedOneWithoutMedicalInputSchema),
      lab_test: z.lazy(() => LabTestCreateNestedManyWithoutMedical_recordInputSchema).optional(),
      vital_signs: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsCreateWithoutAppointmentInputSchema;
