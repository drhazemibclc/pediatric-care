import { z } from 'zod';

export const PaymentMethodSchema = z.enum(['CASH', 'CARD']);

export type PaymentMethodType = `${z.infer<typeof PaymentMethodSchema>}`;

export default PaymentMethodSchema;
