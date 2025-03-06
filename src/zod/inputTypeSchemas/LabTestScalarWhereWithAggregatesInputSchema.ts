import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const LabTestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabTestScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LabTestScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      record_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      test_date: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      result: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      notes: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      service_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default LabTestScalarWhereWithAggregatesInputSchema;
