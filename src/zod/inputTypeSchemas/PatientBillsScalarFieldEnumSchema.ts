import { z } from 'zod';

export const PatientBillsScalarFieldEnumSchema = z.enum([
  'id',
  'bill_id',
  'service_id',
  'service_date',
  'quantity',
  'unit_cost',
  'total_cost',
  'created_at',
  'updated_at',
]);

export default PatientBillsScalarFieldEnumSchema;
