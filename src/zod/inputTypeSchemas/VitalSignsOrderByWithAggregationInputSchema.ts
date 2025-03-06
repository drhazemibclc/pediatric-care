import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { VitalSignsAvgOrderByAggregateInputSchema } from './VitalSignsAvgOrderByAggregateInputSchema';
import { VitalSignsCountOrderByAggregateInputSchema } from './VitalSignsCountOrderByAggregateInputSchema';
import { VitalSignsMaxOrderByAggregateInputSchema } from './VitalSignsMaxOrderByAggregateInputSchema';
import { VitalSignsMinOrderByAggregateInputSchema } from './VitalSignsMinOrderByAggregateInputSchema';
import { VitalSignsSumOrderByAggregateInputSchema } from './VitalSignsSumOrderByAggregateInputSchema';

export const VitalSignsOrderByWithAggregationInputSchema: z.ZodType<Prisma.VitalSignsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      body_temperature: z.lazy(() => SortOrderSchema).optional(),
      systolic: z.lazy(() => SortOrderSchema).optional(),
      diastolic: z.lazy(() => SortOrderSchema).optional(),
      heartRate: z.lazy(() => SortOrderSchema).optional(),
      respiratory_rate: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      oxygen_saturation: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      weight: z.lazy(() => SortOrderSchema).optional(),
      height: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => VitalSignsCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => VitalSignsAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => VitalSignsMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => VitalSignsMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => VitalSignsSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default VitalSignsOrderByWithAggregationInputSchema;
