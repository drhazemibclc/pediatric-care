import { z } from 'zod';

export const VitalSignsScalarFieldEnumSchema = z.enum([
  'id',
  'patient_id',
  'medical_id',
  'body_temperature',
  'systolic',
  'diastolic',
  'heartRate',
  'respiratory_rate',
  'oxygen_saturation',
  'weight',
  'height',
  'created_at',
  'updated_at',
]);

export default VitalSignsScalarFieldEnumSchema;
