import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumPaymentMethodWithAggregatesFilterSchema } from './EnumPaymentMethodWithAggregatesFilterSchema';
import { EnumPaymentStatusWithAggregatesFilterSchema } from './EnumPaymentStatusWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const PaymentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PaymentScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      bill_id: z
        .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      patient_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      appointment_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      bill_date: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      payment_date: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      discount: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      total_amount: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      amount_paid: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
      payment_method: z
        .union([
          z.lazy(() => EnumPaymentMethodWithAggregatesFilterSchema),
          z.lazy(() => PaymentMethodSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => EnumPaymentStatusWithAggregatesFilterSchema),
          z.lazy(() => PaymentStatusSchema),
        ])
        .optional(),
      receipt_number: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default PaymentScalarWhereWithAggregatesInputSchema;
