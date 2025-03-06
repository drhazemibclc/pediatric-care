import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentOrderByRelationAggregateInputSchema } from './AppointmentOrderByRelationAggregateInputSchema';
import { DiagnosisOrderByRelationAggregateInputSchema } from './DiagnosisOrderByRelationAggregateInputSchema';
import { RatingOrderByRelationAggregateInputSchema } from './RatingOrderByRelationAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkingDaysOrderByRelationAggregateInputSchema } from './WorkingDaysOrderByRelationAggregateInputSchema';

export const DoctorOrderByWithRelationInputSchema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      specialization: z.lazy(() => SortOrderSchema).optional(),
      license_number: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => SortOrderSchema).optional(),
      department: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      colorCode: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      availability_status: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      working_days: z.lazy(() => WorkingDaysOrderByRelationAggregateInputSchema).optional(),
      appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
      ratings: z.lazy(() => RatingOrderByRelationAggregateInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default DoctorOrderByWithRelationInputSchema;
