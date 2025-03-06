import { z } from 'zod';

export const LabTestScalarFieldEnumSchema = z.enum([
  'id',
  'record_id',
  'test_date',
  'result',
  'status',
  'notes',
  'service_id',
  'created_at',
  'updated_at',
]);

export default LabTestScalarFieldEnumSchema;
