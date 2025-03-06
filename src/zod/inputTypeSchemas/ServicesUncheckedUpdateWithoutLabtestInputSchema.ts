import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema } from './PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ServicesUncheckedUpdateWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUncheckedUpdateWithoutLabtestInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      service_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      description: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      bills: z
        .lazy(() => PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema)
        .optional(),
    })
    .strict();

export default ServicesUncheckedUpdateWithoutLabtestInputSchema;
