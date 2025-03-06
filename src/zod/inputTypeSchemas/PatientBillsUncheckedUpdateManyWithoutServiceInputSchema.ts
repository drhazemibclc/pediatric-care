import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PatientBillsUncheckedUpdateManyWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUncheckedUpdateManyWithoutServiceInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      bill_id: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      service_date: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      quantity: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      unit_cost: z
        .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
        .optional(),
      total_cost: z
        .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
        .optional(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
    })
    .strict();

export default PatientBillsUncheckedUpdateManyWithoutServiceInputSchema;
