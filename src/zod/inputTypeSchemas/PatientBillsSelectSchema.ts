import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentArgsSchema } from '../outputTypeSchemas/PaymentArgsSchema';
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema';

export const PatientBillsSelectSchema: z.ZodType<Prisma.PatientBillsSelect> = z
  .object({
    id: z.boolean().optional(),
    bill_id: z.boolean().optional(),
    service_id: z.boolean().optional(),
    service_date: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unit_cost: z.boolean().optional(),
    total_cost: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    service: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
    payment: z.union([z.boolean(), z.lazy(() => PaymentArgsSchema)]).optional(),
  })
  .strict();

export default PatientBillsSelectSchema;
