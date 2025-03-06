import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateNestedOneWithoutWorking_daysInputSchema } from './DoctorCreateNestedOneWithoutWorking_daysInputSchema';

export const WorkingDaysCreateInputSchema: z.ZodType<Prisma.WorkingDaysCreateInput> = z
  .object({
    day: z.string(),
    start_time: z.string(),
    close_time: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    doctor: z.lazy(() => DoctorCreateNestedOneWithoutWorking_daysInputSchema),
  })
  .strict();

export default WorkingDaysCreateInputSchema;
