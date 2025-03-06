import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuditLogCreateInputSchema: z.ZodType<Prisma.AuditLogCreateInput> = z
  .object({
    user_id: z.string(),
    record_id: z.string(),
    action: z.string(),
    details: z.string().optional().nullable(),
    model: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export default AuditLogCreateInputSchema;
