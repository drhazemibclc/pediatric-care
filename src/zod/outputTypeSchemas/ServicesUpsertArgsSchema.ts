import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServicesCreateInputSchema } from '../inputTypeSchemas/ServicesCreateInputSchema';
import { ServicesIncludeSchema } from '../inputTypeSchemas/ServicesIncludeSchema';
import { ServicesUncheckedCreateInputSchema } from '../inputTypeSchemas/ServicesUncheckedCreateInputSchema';
import { ServicesUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServicesUncheckedUpdateInputSchema';
import { ServicesUpdateInputSchema } from '../inputTypeSchemas/ServicesUpdateInputSchema';
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema';
import { LabTestArgsSchema } from '../outputTypeSchemas/LabTestArgsSchema';
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema';
import { ServicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/ServicesCountOutputTypeArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServicesSelectSchema: z.ZodType<Prisma.ServicesSelect> = z
  .object({
    id: z.boolean().optional(),
    service_name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    labtest: z.union([z.boolean(), z.lazy(() => LabTestArgsSchema)]).optional(),
    bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ServicesCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const ServicesUpsertArgsSchema: z.ZodType<Prisma.ServicesUpsertArgs> = z
  .object({
    select: ServicesSelectSchema.optional(),
    include: z.lazy(() => ServicesIncludeSchema).optional(),
    where: ServicesWhereUniqueInputSchema,
    create: z.union([ServicesCreateInputSchema, ServicesUncheckedCreateInputSchema]),
    update: z.union([ServicesUpdateInputSchema, ServicesUncheckedUpdateInputSchema]),
  })
  .strict();

export default ServicesUpsertArgsSchema;
