import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EnumPaymentMethodFieldUpdateOperationsInputSchema } from './EnumPaymentMethodFieldUpdateOperationsInputSchema';
import { EnumPaymentStatusFieldUpdateOperationsInputSchema } from './EnumPaymentStatusFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { PatientBillsUpdateManyWithoutPaymentNestedInputSchema } from './PatientBillsUpdateManyWithoutPaymentNestedInputSchema';
import { PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema } from './PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema';
import { PaymentMethodSchema } from './PaymentMethodSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';

export const PaymentUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutAppointmentInput> =
  z
    .object({
      bill_id: z
        .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      bill_date: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      payment_date: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      discount: z
        .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
        .optional(),
      total_amount: z
        .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
        .optional(),
      amount_paid: z
        .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
        .optional(),
      payment_method: z
        .union([
          z.lazy(() => PaymentMethodSchema),
          z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      receipt_number: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      patient: z.lazy(() => PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
      bills: z.lazy(() => PatientBillsUpdateManyWithoutPaymentNestedInputSchema).optional(),
    })
    .strict();

export default PaymentUpdateWithoutAppointmentInputSchema;
