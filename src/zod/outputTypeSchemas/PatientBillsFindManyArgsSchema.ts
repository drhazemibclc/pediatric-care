import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsIncludeSchema } from '../inputTypeSchemas/PatientBillsIncludeSchema';
import { PatientBillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientBillsOrderByWithRelationInputSchema';
import { PatientBillsScalarFieldEnumSchema } from '../inputTypeSchemas/PatientBillsScalarFieldEnumSchema';
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema';
import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema';
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

export const PatientBillsFindManyArgsSchema: z.ZodType<Prisma.PatientBillsFindManyArgs> = z
  .object({
    select: PatientBillsSelectSchema.optional(),
    include: z.lazy(() => PatientBillsIncludeSchema).optional(),
    where: PatientBillsWhereInputSchema.optional(),
    orderBy: z
      .union([
        PatientBillsOrderByWithRelationInputSchema.array(),
        PatientBillsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PatientBillsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PatientBillsScalarFieldEnumSchema, PatientBillsScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default PatientBillsFindManyArgsSchema;
