import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkingDaysCreateInputSchema } from '../inputTypeSchemas/WorkingDaysCreateInputSchema';
import { WorkingDaysIncludeSchema } from '../inputTypeSchemas/WorkingDaysIncludeSchema';
import { WorkingDaysUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedCreateInputSchema';
import { WorkingDaysUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedUpdateInputSchema';
import { WorkingDaysUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUpdateInputSchema';
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema';
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

export const WorkingDaysUpsertArgsSchema: z.ZodType<Prisma.WorkingDaysUpsertArgs> = z
  .object({
    select: WorkingDaysSelectSchema.optional(),
    include: z.lazy(() => WorkingDaysIncludeSchema).optional(),
    where: WorkingDaysWhereUniqueInputSchema,
    create: z.union([WorkingDaysCreateInputSchema, WorkingDaysUncheckedCreateInputSchema]),
    update: z.union([WorkingDaysUpdateInputSchema, WorkingDaysUncheckedUpdateInputSchema]),
  })
  .strict();

export default WorkingDaysUpsertArgsSchema;
