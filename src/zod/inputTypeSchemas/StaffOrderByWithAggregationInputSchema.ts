import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StaffCountOrderByAggregateInputSchema } from './StaffCountOrderByAggregateInputSchema';
import { StaffMaxOrderByAggregateInputSchema } from './StaffMaxOrderByAggregateInputSchema';
import { StaffMinOrderByAggregateInputSchema } from './StaffMinOrderByAggregateInputSchema';

export const StaffOrderByWithAggregationInputSchema: z.ZodType<Prisma.StaffOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => SortOrderSchema).optional(),
      department: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      license_number: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      colorCode: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => StaffCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => StaffMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => StaffMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default StaffOrderByWithAggregationInputSchema;
