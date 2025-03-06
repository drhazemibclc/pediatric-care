import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JOBTYPESchema } from './JOBTYPESchema';
import { NestedEnumJOBTYPEFilterSchema } from './NestedEnumJOBTYPEFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';

export const NestedEnumJOBTYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumJOBTYPEWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => JOBTYPESchema).optional(),
      in: z
        .lazy(() => JOBTYPESchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => JOBTYPESchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => JOBTYPESchema),
          z.lazy(() => NestedEnumJOBTYPEWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumJOBTYPEFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumJOBTYPEFilterSchema).optional(),
    })
    .strict();

export default NestedEnumJOBTYPEWithAggregatesFilterSchema;
