import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentOrderByWithRelationInputSchema } from './PaymentOrderByWithRelationInputSchema';
import { ServicesOrderByWithRelationInputSchema } from './ServicesOrderByWithRelationInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientBillsOrderByWithRelationInputSchema: z.ZodType<Prisma.PatientBillsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bill_id: z.lazy(() => SortOrderSchema).optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
      service_date: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      unit_cost: z.lazy(() => SortOrderSchema).optional(),
      total_cost: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      service: z.lazy(() => ServicesOrderByWithRelationInputSchema).optional(),
      payment: z.lazy(() => PaymentOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default PatientBillsOrderByWithRelationInputSchema;
