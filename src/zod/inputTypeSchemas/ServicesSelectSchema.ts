import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestArgsSchema } from '../outputTypeSchemas/LabTestArgsSchema';
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema';
import { ServicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/ServicesCountOutputTypeArgsSchema';

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

export default ServicesSelectSchema;
