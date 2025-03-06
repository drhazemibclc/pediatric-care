import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsCreateInputSchema } from '../inputTypeSchemas/PatientBillsCreateInputSchema';
import { PatientBillsIncludeSchema } from '../inputTypeSchemas/PatientBillsIncludeSchema';
import { PatientBillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedCreateInputSchema';
import { PaymentArgsSchema } from '../outputTypeSchemas/PaymentArgsSchema';
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const PatientBillsCreateArgsSchema: z.ZodType<Prisma.PatientBillsCreateArgs> = z
  .object({
    select: PatientBillsSelectSchema.optional(),
    include: z.lazy(() => PatientBillsIncludeSchema).optional(),
    data: z.union([PatientBillsCreateInputSchema, PatientBillsUncheckedCreateInputSchema]),
  })
  .strict();

export default PatientBillsCreateArgsSchema;
