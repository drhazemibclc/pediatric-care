import { z } from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'record_id',
  'action',
  'details',
  'model',
  'created_at',
  'updated_at',
]);

export default AuditLogScalarFieldEnumSchema;
