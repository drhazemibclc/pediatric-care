import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StaffCreateInputSchema } from '../inputTypeSchemas/StaffCreateInputSchema';
import { StaffUncheckedCreateInputSchema } from '../inputTypeSchemas/StaffUncheckedCreateInputSchema';

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

export const StaffCreateArgsSchema: z.ZodType<Prisma.StaffCreateArgs> = z
  .object({
    select: StaffSelectSchema.optional(),
    data: z.union([StaffCreateInputSchema, StaffUncheckedCreateInputSchema]),
  })
  .strict();

export default StaffCreateArgsSchema;
