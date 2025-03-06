import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditLogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuditLogMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      action: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default AuditLogMaxOrderByAggregateInputSchema;
