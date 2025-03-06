import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkingDaysOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkingDaysOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      day: z.lazy(() => SortOrderSchema).optional(),
      start_time: z.lazy(() => SortOrderSchema).optional(),
      close_time: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default WorkingDaysOrderByWithRelationInputSchema;
