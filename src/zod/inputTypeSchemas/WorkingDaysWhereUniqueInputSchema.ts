import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema';
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { WorkingDaysWhereInputSchema } from './WorkingDaysWhereInputSchema';

export const WorkingDaysWhereUniqueInputSchema: z.ZodType<Prisma.WorkingDaysWhereUniqueInput> = z
  .object({
    id: z.number().int(),
  })
  .and(
    z
      .object({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => WorkingDaysWhereInputSchema),
            z.lazy(() => WorkingDaysWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => WorkingDaysWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => WorkingDaysWhereInputSchema),
            z.lazy(() => WorkingDaysWhereInputSchema).array(),
          ])
          .optional(),
        doctor_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        day: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        start_time: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        close_time: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        doctor: z
          .union([
            z.lazy(() => DoctorScalarRelationFilterSchema),
            z.lazy(() => DoctorWhereInputSchema),
          ])
          .optional(),
      })
      .strict(),
  );

export default WorkingDaysWhereUniqueInputSchema;
