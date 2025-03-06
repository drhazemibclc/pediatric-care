import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VitalSignsSumOrderByAggregateInputSchema: z.ZodType<Prisma.VitalSignsSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      body_temperature: z.lazy(() => SortOrderSchema).optional(),
      systolic: z.lazy(() => SortOrderSchema).optional(),
      diastolic: z.lazy(() => SortOrderSchema).optional(),
      respiratory_rate: z.lazy(() => SortOrderSchema).optional(),
      oxygen_saturation: z.lazy(() => SortOrderSchema).optional(),
      weight: z.lazy(() => SortOrderSchema).optional(),
      height: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default VitalSignsSumOrderByAggregateInputSchema;
