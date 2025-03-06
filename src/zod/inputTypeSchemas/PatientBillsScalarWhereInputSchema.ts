import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const PatientBillsScalarWhereInputSchema: z.ZodType<Prisma.PatientBillsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientBillsScalarWhereInputSchema),
        z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientBillsScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientBillsScalarWhereInputSchema),
        z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    bill_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    service_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    service_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    unit_cost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    total_cost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default PatientBillsScalarWhereInputSchema;
