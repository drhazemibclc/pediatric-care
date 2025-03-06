import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { LabTestUncheckedUpdateManyWithoutMedical_recordNestedInputSchema } from './LabTestUncheckedUpdateManyWithoutMedical_recordNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema';

export const MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedUpdateWithoutAppointmentInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      patient_id: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
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
      lab_test: z
        .lazy(() => LabTestUncheckedUpdateManyWithoutMedical_recordNestedInputSchema)
        .optional(),
      vital_signs: z
        .lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema)
        .optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema)
        .optional(),
    })
    .strict();

export default MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema;
