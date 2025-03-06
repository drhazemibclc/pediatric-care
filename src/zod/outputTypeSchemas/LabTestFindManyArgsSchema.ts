import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestIncludeSchema } from '../inputTypeSchemas/LabTestIncludeSchema';
import { LabTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabTestOrderByWithRelationInputSchema';
import { LabTestScalarFieldEnumSchema } from '../inputTypeSchemas/LabTestScalarFieldEnumSchema';
import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema';
import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema';
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema';
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabTestSelectSchema: z.ZodType<Prisma.LabTestSelect> = z
  .object({
    id: z.boolean().optional(),
    record_id: z.boolean().optional(),
    test_date: z.boolean().optional(),
    result: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    service_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    services: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
    medical_record: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
  })
  .strict();

export const LabTestFindManyArgsSchema: z.ZodType<Prisma.LabTestFindManyArgs> = z
  .object({
    select: LabTestSelectSchema.optional(),
    include: z.lazy(() => LabTestIncludeSchema).optional(),
    where: LabTestWhereInputSchema.optional(),
    orderBy: z
      .union([LabTestOrderByWithRelationInputSchema.array(), LabTestOrderByWithRelationInputSchema])
      .optional(),
    cursor: LabTestWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([LabTestScalarFieldEnumSchema, LabTestScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default LabTestFindManyArgsSchema;
