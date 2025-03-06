import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedOneWithoutBillsInputSchema } from './AppointmentCreateNestedOneWithoutBillsInputSchema';
import { PatientBillsCreateNestedManyWithoutPaymentInputSchema } from './PatientBillsCreateNestedManyWithoutPaymentInputSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';

export const PaymentCreateWithoutPatientInputSchema: z.ZodType<Prisma.PaymentCreateWithoutPatientInput> =
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
      bills: z.lazy(() => PatientBillsCreateNestedManyWithoutPaymentInputSchema).optional(),
    })
    .strict();

export default PaymentCreateWithoutPatientInputSchema;
