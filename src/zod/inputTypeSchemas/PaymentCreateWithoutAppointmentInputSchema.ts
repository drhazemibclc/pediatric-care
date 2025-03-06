import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsCreateNestedManyWithoutPaymentInputSchema } from './PatientBillsCreateNestedManyWithoutPaymentInputSchema';
import { PatientCreateNestedOneWithoutPaymentsInputSchema } from './PatientCreateNestedOneWithoutPaymentsInputSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';

export const PaymentCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateWithoutAppointmentInput> =
  z
    .object({
      bill_id: z.number().int().optional().nullable(),
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
      patient: z.lazy(() => PatientCreateNestedOneWithoutPaymentsInputSchema),
      bills: z.lazy(() => PatientBillsCreateNestedManyWithoutPaymentInputSchema).optional(),
    })
    .strict();

export default PaymentCreateWithoutAppointmentInputSchema;
