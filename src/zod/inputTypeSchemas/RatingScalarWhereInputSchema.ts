import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const RatingScalarWhereInputSchema: z.ZodType<Prisma.RatingScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RatingScalarWhereInputSchema),
        z.lazy(() => RatingScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RatingScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RatingScalarWhereInputSchema),
        z.lazy(() => RatingScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    staff_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    rating: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    comment: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default RatingScalarWhereInputSchema;
