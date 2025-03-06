import { z } from 'zod';

export const PaymentStatusSchema = z.enum(['PAID', 'UNPAID', 'PART']);

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`;

export default PaymentStatusSchema;
