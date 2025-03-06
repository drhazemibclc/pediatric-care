import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema';

export const MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedUpdateWithoutLab_testInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      patient_id: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      appointment_id: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
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
      vital_signs: z
        .lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema)
        .optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema)
        .optional(),
    })
    .strict();

export default MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema;
