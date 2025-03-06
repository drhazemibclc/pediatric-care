import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkingDaysCreateInputSchema } from '../inputTypeSchemas/WorkingDaysCreateInputSchema';
import { WorkingDaysIncludeSchema } from '../inputTypeSchemas/WorkingDaysIncludeSchema';
import { WorkingDaysUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedCreateInputSchema';
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkingDaysSelectSchema: z.ZodType<Prisma.WorkingDaysSelect> = z
  .object({
    id: z.boolean().optional(),
    doctor_id: z.boolean().optional(),
    day: z.boolean().optional(),
    start_time: z.boolean().optional(),
    close_time: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
  })
  .strict();

export const WorkingDaysCreateArgsSchema: z.ZodType<Prisma.WorkingDaysCreateArgs> = z
  .object({
    select: WorkingDaysSelectSchema.optional(),
    include: z.lazy(() => WorkingDaysIncludeSchema).optional(),
    data: z.union([WorkingDaysCreateInputSchema, WorkingDaysUncheckedCreateInputSchema]),
  })
  .strict();

export default WorkingDaysCreateArgsSchema;
