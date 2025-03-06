import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentOrderByWithRelationInputSchema } from './AppointmentOrderByWithRelationInputSchema';
import { PatientBillsOrderByRelationAggregateInputSchema } from './PatientBillsOrderByRelationAggregateInputSchema';
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bill_id: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_id: z.lazy(() => SortOrderSchema).optional(),
      bill_date: z.lazy(() => SortOrderSchema).optional(),
      payment_date: z.lazy(() => SortOrderSchema).optional(),
      discount: z.lazy(() => SortOrderSchema).optional(),
      total_amount: z.lazy(() => SortOrderSchema).optional(),
      amount_paid: z.lazy(() => SortOrderSchema).optional(),
      payment_method: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      receipt_number: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
      patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
      bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default PaymentOrderByWithRelationInputSchema;
