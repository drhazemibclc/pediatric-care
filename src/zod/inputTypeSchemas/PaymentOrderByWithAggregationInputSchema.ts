import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentAvgOrderByAggregateInputSchema } from './PaymentAvgOrderByAggregateInputSchema';
import { PaymentCountOrderByAggregateInputSchema } from './PaymentCountOrderByAggregateInputSchema';
import { PaymentMaxOrderByAggregateInputSchema } from './PaymentMaxOrderByAggregateInputSchema';
import { PaymentMinOrderByAggregateInputSchema } from './PaymentMinOrderByAggregateInputSchema';
import { PaymentSumOrderByAggregateInputSchema } from './PaymentSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> =
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
      _count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default PaymentOrderByWithAggregationInputSchema;
