import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogWhereInputSchema } from './AuditLogWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AuditLogWhereUniqueInputSchema: z.ZodType<Prisma.AuditLogWhereUniqueInput> = z
  .object({
    id: z.number().int(),
  })
  .and(
    z
      .object({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => AuditLogWhereInputSchema),
            z.lazy(() => AuditLogWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => AuditLogWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => AuditLogWhereInputSchema),
            z.lazy(() => AuditLogWhereInputSchema).array(),
          ])
          .optional(),
        user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        record_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        details: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        model: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      })
      .strict(),
  );

export default AuditLogWhereUniqueInputSchema;
