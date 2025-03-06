import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServicesIncludeSchema } from '../inputTypeSchemas/ServicesIncludeSchema';
import { ServicesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServicesOrderByWithRelationInputSchema';
import { ServicesScalarFieldEnumSchema } from '../inputTypeSchemas/ServicesScalarFieldEnumSchema';
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema';
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

export const ServicesFindManyArgsSchema: z.ZodType<Prisma.ServicesFindManyArgs> = z
  .object({
    select: ServicesSelectSchema.optional(),
    include: z.lazy(() => ServicesIncludeSchema).optional(),
    where: ServicesWhereInputSchema.optional(),
    orderBy: z
      .union([
        ServicesOrderByWithRelationInputSchema.array(),
        ServicesOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ServicesWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([ServicesScalarFieldEnumSchema, ServicesScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default ServicesFindManyArgsSchema;
