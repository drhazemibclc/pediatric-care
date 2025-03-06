import { z } from 'zod';

export const WorkingDaysScalarFieldEnumSchema = z.enum([
  'id',
  'doctor_id',
  'day',
  'start_time',
  'close_time',
  'created_at',
  'updated_at',
]);

export default WorkingDaysScalarFieldEnumSchema;
