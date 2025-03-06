import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bill_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_id: z.lazy(() => SortOrderSchema).optional(),
      discount: z.lazy(() => SortOrderSchema).optional(),
      total_amount: z.lazy(() => SortOrderSchema).optional(),
      amount_paid: z.lazy(() => SortOrderSchema).optional(),
      receipt_number: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PaymentAvgOrderByAggregateInputSchema;
