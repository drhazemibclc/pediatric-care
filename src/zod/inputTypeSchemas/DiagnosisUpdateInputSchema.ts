import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DoctorUpdateOneRequiredWithoutDiagnosisNestedInputSchema } from './DoctorUpdateOneRequiredWithoutDiagnosisNestedInputSchema';
import { MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInputSchema } from './MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const DiagnosisUpdateInputSchema: z.ZodType<Prisma.DiagnosisUpdateInput> = z
  .object({
    patient_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    symptoms: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    diagnosis: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    notes: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    prescribed_medications: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    follow_up_plan: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    created_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    updated_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutDiagnosisNestedInputSchema).optional(),
    medical: z
      .lazy(() => MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInputSchema)
      .optional(),
  })
  .strict();

export default DiagnosisUpdateInputSchema;
