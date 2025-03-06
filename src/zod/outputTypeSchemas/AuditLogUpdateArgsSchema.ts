import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedUpdateInputSchema';
import { AuditLogUpdateInputSchema } from '../inputTypeSchemas/AuditLogUpdateInputSchema';
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

export const AuditLogUpdateArgsSchema: z.ZodType<Prisma.AuditLogUpdateArgs> = z
  .object({
    select: AuditLogSelectSchema.optional(),
    data: z.union([AuditLogUpdateInputSchema, AuditLogUncheckedUpdateInputSchema]),
    where: AuditLogWhereUniqueInputSchema,
  })
  .strict();

export default AuditLogUpdateArgsSchema;
