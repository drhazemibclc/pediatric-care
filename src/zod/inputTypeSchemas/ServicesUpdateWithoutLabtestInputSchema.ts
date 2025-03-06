import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { PatientBillsUpdateManyWithoutServiceNestedInputSchema } from './PatientBillsUpdateManyWithoutServiceNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ServicesUpdateWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUpdateWithoutLabtestInput> =
  z
    .object({
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
      bills: z.lazy(() => PatientBillsUpdateManyWithoutServiceNestedInputSchema).optional(),
    })
    .strict();

export default ServicesUpdateWithoutLabtestInputSchema;
