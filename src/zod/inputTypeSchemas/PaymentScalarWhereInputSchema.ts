import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumPaymentMethodFilterSchema } from './EnumPaymentMethodFilterSchema';
import { EnumPaymentStatusFilterSchema } from './EnumPaymentStatusFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const PaymentScalarWhereInputSchema: z.ZodType<Prisma.PaymentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentScalarWhereInputSchema),
        z.lazy(() => PaymentScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentScalarWhereInputSchema),
        z.lazy(() => PaymentScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    bill_id: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    appointment_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    bill_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    payment_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    discount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    total_amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    amount_paid: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    payment_method: z
      .union([z.lazy(() => EnumPaymentMethodFilterSchema), z.lazy(() => PaymentMethodSchema)])
      .optional(),
    status: z
      .union([z.lazy(() => EnumPaymentStatusFilterSchema), z.lazy(() => PaymentStatusSchema)])
      .optional(),
    receipt_number: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default PaymentScalarWhereInputSchema;
