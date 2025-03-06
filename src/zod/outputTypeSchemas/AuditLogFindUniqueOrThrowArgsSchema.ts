import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditLogSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    record_id: z.boolean().optional(),
    action: z.boolean().optional(),
    details: z.boolean().optional(),
    model: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
  })
  .strict();

export const AuditLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuditLogFindUniqueOrThrowArgs> =
  z
    .object({
      select: AuditLogSelectSchema.optional(),
      where: AuditLogWhereUniqueInputSchema,
    })
    .strict();

export default AuditLogFindUniqueOrThrowArgsSchema;
