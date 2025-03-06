import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuditLogOrderByWithRelationInputSchema';
import { AuditLogScalarFieldEnumSchema } from '../inputTypeSchemas/AuditLogScalarFieldEnumSchema';
import { AuditLogWhereInputSchema } from '../inputTypeSchemas/AuditLogWhereInputSchema';
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

export const AuditLogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuditLogFindFirstOrThrowArgs> = z
  .object({
    select: AuditLogSelectSchema.optional(),
    where: AuditLogWhereInputSchema.optional(),
    orderBy: z
      .union([
        AuditLogOrderByWithRelationInputSchema.array(),
        AuditLogOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: AuditLogWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default AuditLogFindFirstOrThrowArgsSchema;
