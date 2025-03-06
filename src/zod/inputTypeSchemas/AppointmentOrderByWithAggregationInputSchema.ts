import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentAvgOrderByAggregateInputSchema } from './AppointmentAvgOrderByAggregateInputSchema';
import { AppointmentCountOrderByAggregateInputSchema } from './AppointmentCountOrderByAggregateInputSchema';
import { AppointmentMaxOrderByAggregateInputSchema } from './AppointmentMaxOrderByAggregateInputSchema';
import { AppointmentMinOrderByAggregateInputSchema } from './AppointmentMinOrderByAggregateInputSchema';
import { AppointmentSumOrderByAggregateInputSchema } from './AppointmentSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AppointmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_date: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      reason: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AppointmentCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AppointmentAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AppointmentMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AppointmentMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AppointmentSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default AppointmentOrderByWithAggregationInputSchema;
