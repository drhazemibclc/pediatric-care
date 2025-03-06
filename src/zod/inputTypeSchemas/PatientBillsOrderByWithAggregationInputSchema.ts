import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsAvgOrderByAggregateInputSchema } from './PatientBillsAvgOrderByAggregateInputSchema';
import { PatientBillsCountOrderByAggregateInputSchema } from './PatientBillsCountOrderByAggregateInputSchema';
import { PatientBillsMaxOrderByAggregateInputSchema } from './PatientBillsMaxOrderByAggregateInputSchema';
import { PatientBillsMinOrderByAggregateInputSchema } from './PatientBillsMinOrderByAggregateInputSchema';
import { PatientBillsSumOrderByAggregateInputSchema } from './PatientBillsSumOrderByAggregateInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientBillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientBillsOrderByWithAggregationInput> =
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
      _count: z.lazy(() => PatientBillsCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => PatientBillsAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PatientBillsMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PatientBillsMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => PatientBillsSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default PatientBillsOrderByWithAggregationInputSchema;
