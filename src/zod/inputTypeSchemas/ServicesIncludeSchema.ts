import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestArgsSchema } from '../outputTypeSchemas/LabTestArgsSchema';
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema';
import { ServicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/ServicesCountOutputTypeArgsSchema';

export const ServicesIncludeSchema: z.ZodType<Prisma.ServicesInclude> = z
  .object({
    labtest: z.union([z.boolean(), z.lazy(() => LabTestArgsSchema)]).optional(),
    bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ServicesCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default ServicesIncludeSchema;
