import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestIncludeSchema } from '../inputTypeSchemas/LabTestIncludeSchema';
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

export const LabTestFindUniqueArgsSchema: z.ZodType<Prisma.LabTestFindUniqueArgs> = z
  .object({
    select: LabTestSelectSchema.optional(),
    include: z.lazy(() => LabTestIncludeSchema).optional(),
    where: LabTestWhereUniqueInputSchema,
  })
  .strict();

export default LabTestFindUniqueArgsSchema;
