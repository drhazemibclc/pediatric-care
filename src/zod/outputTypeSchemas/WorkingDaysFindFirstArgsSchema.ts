import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkingDaysIncludeSchema } from '../inputTypeSchemas/WorkingDaysIncludeSchema';
import { WorkingDaysOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkingDaysOrderByWithRelationInputSchema';
import { WorkingDaysScalarFieldEnumSchema } from '../inputTypeSchemas/WorkingDaysScalarFieldEnumSchema';
import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema';
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

export const WorkingDaysFindFirstArgsSchema: z.ZodType<Prisma.WorkingDaysFindFirstArgs> = z
  .object({
    select: WorkingDaysSelectSchema.optional(),
    include: z.lazy(() => WorkingDaysIncludeSchema).optional(),
    where: WorkingDaysWhereInputSchema.optional(),
    orderBy: z
      .union([
        WorkingDaysOrderByWithRelationInputSchema.array(),
        WorkingDaysOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: WorkingDaysWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([WorkingDaysScalarFieldEnumSchema, WorkingDaysScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default WorkingDaysFindFirstArgsSchema;
