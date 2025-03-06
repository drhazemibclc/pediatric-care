import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AppointmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_date: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      note: z.lazy(() => SortOrderSchema).optional(),
      reason: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default AppointmentMinOrderByAggregateInputSchema;
