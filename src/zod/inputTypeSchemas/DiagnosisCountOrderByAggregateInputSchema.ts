import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DiagnosisCountOrderByAggregateInputSchema: z.ZodType<Prisma.DiagnosisCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      symptoms: z.lazy(() => SortOrderSchema).optional(),
      diagnosis: z.lazy(() => SortOrderSchema).optional(),
      notes: z.lazy(() => SortOrderSchema).optional(),
      prescribed_medications: z.lazy(() => SortOrderSchema).optional(),
      follow_up_plan: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default DiagnosisCountOrderByAggregateInputSchema;
