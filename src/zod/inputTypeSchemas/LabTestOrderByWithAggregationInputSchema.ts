import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestAvgOrderByAggregateInputSchema } from './LabTestAvgOrderByAggregateInputSchema';
import { LabTestCountOrderByAggregateInputSchema } from './LabTestCountOrderByAggregateInputSchema';
import { LabTestMaxOrderByAggregateInputSchema } from './LabTestMaxOrderByAggregateInputSchema';
import { LabTestMinOrderByAggregateInputSchema } from './LabTestMinOrderByAggregateInputSchema';
import { LabTestSumOrderByAggregateInputSchema } from './LabTestSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LabTestOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabTestOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      test_date: z.lazy(() => SortOrderSchema).optional(),
      result: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LabTestCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => LabTestAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LabTestMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LabTestMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => LabTestSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default LabTestOrderByWithAggregationInputSchema;
