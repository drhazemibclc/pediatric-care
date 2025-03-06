import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentCreateNestedOneWithoutBillsInputSchema } from './PaymentCreateNestedOneWithoutBillsInputSchema';
import { ServicesCreateNestedOneWithoutBillsInputSchema } from './ServicesCreateNestedOneWithoutBillsInputSchema';

export const PatientBillsCreateInputSchema: z.ZodType<Prisma.PatientBillsCreateInput> = z
  .object({
    service_date: z.coerce.date(),
    quantity: z.number().int(),
    unit_cost: z.number(),
    total_cost: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputSchema),
    payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputSchema),
  })
  .strict();

export default PatientBillsCreateInputSchema;
