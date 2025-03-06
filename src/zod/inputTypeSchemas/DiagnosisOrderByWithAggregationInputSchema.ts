import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisAvgOrderByAggregateInputSchema } from './DiagnosisAvgOrderByAggregateInputSchema';
import { DiagnosisCountOrderByAggregateInputSchema } from './DiagnosisCountOrderByAggregateInputSchema';
import { DiagnosisMaxOrderByAggregateInputSchema } from './DiagnosisMaxOrderByAggregateInputSchema';
import { DiagnosisMinOrderByAggregateInputSchema } from './DiagnosisMinOrderByAggregateInputSchema';
import { DiagnosisSumOrderByAggregateInputSchema } from './DiagnosisSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DiagnosisOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiagnosisOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      symptoms: z.lazy(() => SortOrderSchema).optional(),
      diagnosis: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      prescribed_medications: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      follow_up_plan: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => DiagnosisCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => DiagnosisAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => DiagnosisMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => DiagnosisMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => DiagnosisSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default DiagnosisOrderByWithAggregationInputSchema;
