import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedOneWithoutMedicalInputSchema } from './AppointmentCreateNestedOneWithoutMedicalInputSchema';
import { DiagnosisCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisCreateNestedManyWithoutMedicalInputSchema';
import { PatientCreateNestedOneWithoutMedicalInputSchema } from './PatientCreateNestedOneWithoutMedicalInputSchema';
import { VitalSignsCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsCreateNestedManyWithoutMedicalInputSchema';

export const MedicalRecordsCreateWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutLab_testInput> =
  z
    .object({
      doctor_id: z.string(),
      treatment_plan: z.string().optional().nullable(),
      prescriptions: z.string().optional().nullable(),
      lab_request: z.string().optional().nullable(),
      notes: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      appointment: z.lazy(() => AppointmentCreateNestedOneWithoutMedicalInputSchema),
      patient: z.lazy(() => PatientCreateNestedOneWithoutMedicalInputSchema),
      vital_signs: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsCreateWithoutLab_testInputSchema;
