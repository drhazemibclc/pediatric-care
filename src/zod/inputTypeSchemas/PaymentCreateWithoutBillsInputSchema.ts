import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedOneWithoutBillsInputSchema } from './AppointmentCreateNestedOneWithoutBillsInputSchema';
import { PatientCreateNestedOneWithoutPaymentsInputSchema } from './PatientCreateNestedOneWithoutPaymentsInputSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';

export const PaymentCreateWithoutBillsInputSchema: z.ZodType<Prisma.PaymentCreateWithoutBillsInput> =
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
      appointment: z.lazy(() => AppointmentCreateNestedOneWithoutBillsInputSchema),
      patient: z.lazy(() => PatientCreateNestedOneWithoutPaymentsInputSchema),
    })
    .strict();

export default PaymentCreateWithoutBillsInputSchema;
