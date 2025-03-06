import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientBillsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PatientBillsMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bill_id: z.lazy(() => SortOrderSchema).optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
      service_date: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      unit_cost: z.lazy(() => SortOrderSchema).optional(),
      total_cost: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PatientBillsMaxOrderByAggregateInputSchema;
