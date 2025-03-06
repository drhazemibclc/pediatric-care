import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentCreateNestedOneWithoutBillsInputSchema } from './PaymentCreateNestedOneWithoutBillsInputSchema';

export const PatientBillsCreateWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsCreateWithoutServiceInput> =
  z
    .object({
      service_date: z.coerce.date(),
      quantity: z.number().int(),
      unit_cost: z.number(),
      total_cost: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputSchema),
    })
    .strict();

export default PatientBillsCreateWithoutServiceInputSchema;
