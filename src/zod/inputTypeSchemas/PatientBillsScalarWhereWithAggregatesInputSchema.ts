import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PatientBillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PatientBillsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      bill_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      service_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      service_date: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      unit_cost: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      total_cost: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default PatientBillsScalarWhereWithAggregatesInputSchema;
