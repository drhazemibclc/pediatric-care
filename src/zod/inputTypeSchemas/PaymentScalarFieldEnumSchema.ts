import { z } from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum([
  'id',
  'bill_id',
  'patient_id',
  'appointment_id',
  'bill_date',
  'payment_date',
  'discount',
  'total_amount',
  'amount_paid',
  'payment_method',
  'status',
  'receipt_number',
  'created_at',
  'updated_at',
]);

export default PaymentScalarFieldEnumSchema;
