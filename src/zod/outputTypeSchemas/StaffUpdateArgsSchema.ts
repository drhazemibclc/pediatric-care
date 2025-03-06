import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StaffUncheckedUpdateInputSchema } from '../inputTypeSchemas/StaffUncheckedUpdateInputSchema';
import { StaffUpdateInputSchema } from '../inputTypeSchemas/StaffUpdateInputSchema';
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

export const StaffUpdateArgsSchema: z.ZodType<Prisma.StaffUpdateArgs> = z
  .object({
    select: StaffSelectSchema.optional(),
    data: z.union([StaffUpdateInputSchema, StaffUncheckedUpdateInputSchema]),
    where: StaffWhereUniqueInputSchema,
  })
  .strict();

export default StaffUpdateArgsSchema;
