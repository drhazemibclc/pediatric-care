import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema } from './ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const LabTestUpdateWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestUpdateWithoutMedical_recordInput> =
  z
    .object({
      test_date: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      result: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      status: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
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
      services: z.lazy(() => ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema).optional(),
    })
    .strict();

export default LabTestUpdateWithoutMedical_recordInputSchema;
