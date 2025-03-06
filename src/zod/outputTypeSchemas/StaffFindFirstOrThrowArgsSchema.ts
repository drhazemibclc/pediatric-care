import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffOrderByWithRelationInputSchema';
import { StaffScalarFieldEnumSchema } from '../inputTypeSchemas/StaffScalarFieldEnumSchema';
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema';
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffSelectSchema: z.ZodType<Prisma.StaffSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    department: z.boolean().optional(),
    img: z.boolean().optional(),
    license_number: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
  })
  .strict();

export const StaffFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StaffFindFirstOrThrowArgs> = z
  .object({
    select: StaffSelectSchema.optional(),
    where: StaffWhereInputSchema.optional(),
    orderBy: z
      .union([StaffOrderByWithRelationInputSchema.array(), StaffOrderByWithRelationInputSchema])
      .optional(),
    cursor: StaffWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([StaffScalarFieldEnumSchema, StaffScalarFieldEnumSchema.array()]).optional(),
  })
  .strict();

export default StaffFindFirstOrThrowArgsSchema;
