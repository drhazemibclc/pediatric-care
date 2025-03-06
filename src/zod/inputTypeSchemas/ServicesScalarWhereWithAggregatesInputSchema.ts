import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ServicesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServicesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ServicesScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      service_name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      price: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default ServicesScalarWhereWithAggregatesInputSchema;
