import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestOrderByWithRelationInputSchema } from './LabTestOrderByWithRelationInputSchema';
import { PatientBillsOrderByRelationAggregateInputSchema } from './PatientBillsOrderByRelationAggregateInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ServicesOrderByWithRelationInputSchema: z.ZodType<Prisma.ServicesOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      service_name: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      labtest: z.lazy(() => LabTestOrderByWithRelationInputSchema).optional(),
      bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default ServicesOrderByWithRelationInputSchema;
