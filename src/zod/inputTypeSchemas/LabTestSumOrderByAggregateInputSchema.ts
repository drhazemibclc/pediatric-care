import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabTestSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabTestSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default LabTestSumOrderByAggregateInputSchema;
