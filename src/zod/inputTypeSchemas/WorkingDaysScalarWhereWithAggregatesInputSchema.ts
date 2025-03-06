import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const WorkingDaysScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkingDaysScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema),
          z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema),
          z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      doctor_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      day: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      start_time: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      close_time: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default WorkingDaysScalarWhereWithAggregatesInputSchema;
