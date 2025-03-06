import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const RatingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RatingScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => RatingScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      staff_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      patient_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      rating: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      comment: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default RatingScalarWhereWithAggregatesInputSchema;
