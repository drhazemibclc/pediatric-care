import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PaymentScalarRelationFilterSchema } from './PaymentScalarRelationFilterSchema';
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema';
import { ServicesScalarRelationFilterSchema } from './ServicesScalarRelationFilterSchema';
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema';

export const PatientBillsWhereInputSchema: z.ZodType<Prisma.PatientBillsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientBillsWhereInputSchema),
        z.lazy(() => PatientBillsWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientBillsWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientBillsWhereInputSchema),
        z.lazy(() => PatientBillsWhereInputSchema).array(),
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
    service: z
      .union([
        z.lazy(() => ServicesScalarRelationFilterSchema),
        z.lazy(() => ServicesWhereInputSchema),
      ])
      .optional(),
    payment: z
      .union([
        z.lazy(() => PaymentScalarRelationFilterSchema),
        z.lazy(() => PaymentWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export default PatientBillsWhereInputSchema;
