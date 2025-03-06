import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsUncheckedCreateNestedManyWithoutPaymentInputSchema } from './PatientBillsUncheckedCreateNestedManyWithoutPaymentInputSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';

export const PaymentUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z
  .object({
    id: z.number().int().optional(),
    bill_id: z.number().int().optional().nullable(),
    patient_id: z.string(),
    appointment_id: z.number().int(),
    bill_date: z.coerce.date(),
    payment_date: z.coerce.date(),
    discount: z.number(),
    total_amount: z.number(),
    amount_paid: z.number(),
    payment_method: z.lazy(() => PaymentMethodSchema).optional(),
    status: z.lazy(() => PaymentStatusSchema).optional(),
    receipt_number: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutPaymentInputSchema).optional(),
  })
  .strict();

export default PaymentUncheckedCreateInputSchema;
