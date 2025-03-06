import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema } from './AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DiagnosisUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUpdateManyWithoutMedicalNestedInputSchema';
import { LabTestUpdateManyWithoutMedical_recordNestedInputSchema } from './LabTestUpdateManyWithoutMedical_recordNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PatientUpdateOneRequiredWithoutMedicalNestedInputSchema } from './PatientUpdateOneRequiredWithoutMedicalNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { VitalSignsUpdateManyWithoutMedicalNestedInputSchema } from './VitalSignsUpdateManyWithoutMedicalNestedInputSchema';

export const MedicalRecordsUpdateInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateInput> = z
  .object({
    doctor_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    treatment_plan: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    prescriptions: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    lab_request: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    notes: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    created_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    updated_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    appointment: z
      .lazy(() => AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema)
      .optional(),
    patient: z.lazy(() => PatientUpdateOneRequiredWithoutMedicalNestedInputSchema).optional(),
    lab_test: z.lazy(() => LabTestUpdateManyWithoutMedical_recordNestedInputSchema).optional(),
    vital_signs: z.lazy(() => VitalSignsUpdateManyWithoutMedicalNestedInputSchema).optional(),
    diagnosis: z.lazy(() => DiagnosisUpdateManyWithoutMedicalNestedInputSchema).optional(),
  })
  .strict();

export default MedicalRecordsUpdateInputSchema;
