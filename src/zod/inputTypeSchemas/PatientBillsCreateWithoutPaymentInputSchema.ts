import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServicesCreateNestedOneWithoutBillsInputSchema } from './ServicesCreateNestedOneWithoutBillsInputSchema';

export const PatientBillsCreateWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsCreateWithoutPaymentInput> =
  z
    .object({
      service_date: z.coerce.date(),
      quantity: z.number().int(),
      unit_cost: z.number(),
      total_cost: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputSchema),
    })
    .strict();

export default PatientBillsCreateWithoutPaymentInputSchema;
