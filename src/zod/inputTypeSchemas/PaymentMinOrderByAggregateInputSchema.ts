import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bill_id: z.lazy(() => SortOrderSchema).optional(),
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
    })
    .strict();

export default PaymentMinOrderByAggregateInputSchema;
