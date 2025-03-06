import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { RoleSchema } from './RoleSchema';
import { StatusSchema } from './StatusSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StaffWhereInputSchema: z.ZodType<Prisma.StaffWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => StaffWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    department: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    img: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    license_number: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    colorCode: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    status: z.union([z.lazy(() => EnumStatusFilterSchema), z.lazy(() => StatusSchema)]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default StaffWhereInputSchema;
