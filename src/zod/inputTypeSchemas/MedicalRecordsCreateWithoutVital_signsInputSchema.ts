import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedOneWithoutMedicalInputSchema } from './AppointmentCreateNestedOneWithoutMedicalInputSchema';
import { DiagnosisCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisCreateNestedManyWithoutMedicalInputSchema';
import { LabTestCreateNestedManyWithoutMedical_recordInputSchema } from './LabTestCreateNestedManyWithoutMedical_recordInputSchema';
import { PatientCreateNestedOneWithoutMedicalInputSchema } from './PatientCreateNestedOneWithoutMedicalInputSchema';

export const MedicalRecordsCreateWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutVital_signsInput> =
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
      lab_test: z.lazy(() => LabTestCreateNestedManyWithoutMedical_recordInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsCreateWithoutVital_signsInputSchema;
