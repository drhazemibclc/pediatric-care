import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabTestCountOrderByAggregateInputSchema: z.ZodType<Prisma.LabTestCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      test_date: z.lazy(() => SortOrderSchema).optional(),
      result: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      notes: z.lazy(() => SortOrderSchema).optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default LabTestCountOrderByAggregateInputSchema;
