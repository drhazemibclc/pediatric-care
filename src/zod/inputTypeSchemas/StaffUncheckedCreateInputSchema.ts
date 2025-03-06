import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StatusSchema } from './StatusSchema';

export const StaffUncheckedCreateInputSchema: z.ZodType<Prisma.StaffUncheckedCreateInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    department: z.string().optional().nullable(),
    img: z.string().optional().nullable(),
    license_number: z.string().optional().nullable(),
    colorCode: z.string().optional().nullable(),
    role: z.lazy(() => RoleSchema),
    status: z.lazy(() => StatusSchema).optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export default StaffUncheckedCreateInputSchema;
