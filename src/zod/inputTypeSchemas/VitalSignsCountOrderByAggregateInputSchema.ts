import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VitalSignsCountOrderByAggregateInputSchema: z.ZodType<Prisma.VitalSignsCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      body_temperature: z.lazy(() => SortOrderSchema).optional(),
      systolic: z.lazy(() => SortOrderSchema).optional(),
      diastolic: z.lazy(() => SortOrderSchema).optional(),
      heartRate: z.lazy(() => SortOrderSchema).optional(),
      respiratory_rate: z.lazy(() => SortOrderSchema).optional(),
      oxygen_saturation: z.lazy(() => SortOrderSchema).optional(),
      weight: z.lazy(() => SortOrderSchema).optional(),
      height: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default VitalSignsCountOrderByAggregateInputSchema;
