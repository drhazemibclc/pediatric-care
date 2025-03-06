import { z } from 'zod';

export const DiagnosisScalarFieldEnumSchema = z.enum([
  'id',
  'patient_id',
  'medical_id',
  'doctor_id',
  'symptoms',
  'diagnosis',
  'notes',
  'prescribed_medications',
  'follow_up_plan',
  'created_at',
  'updated_at',
]);

export default DiagnosisScalarFieldEnumSchema;
