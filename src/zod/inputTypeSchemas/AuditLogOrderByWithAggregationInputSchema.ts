import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogAvgOrderByAggregateInputSchema } from './AuditLogAvgOrderByAggregateInputSchema';
import { AuditLogCountOrderByAggregateInputSchema } from './AuditLogCountOrderByAggregateInputSchema';
import { AuditLogMaxOrderByAggregateInputSchema } from './AuditLogMaxOrderByAggregateInputSchema';
import { AuditLogMinOrderByAggregateInputSchema } from './AuditLogMinOrderByAggregateInputSchema';
import { AuditLogSumOrderByAggregateInputSchema } from './AuditLogSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuditLogOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      action: z.lazy(() => SortOrderSchema).optional(),
      details: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AuditLogCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AuditLogAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AuditLogMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AuditLogMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AuditLogSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default AuditLogOrderByWithAggregationInputSchema;
