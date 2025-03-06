import { z } from 'zod';

export const RatingScalarFieldEnumSchema = z.enum([
  'id',
  'staff_id',
  'patient_id',
  'rating',
  'comment',
  'created_at',
  'updated_at',
]);

export default RatingScalarFieldEnumSchema;
