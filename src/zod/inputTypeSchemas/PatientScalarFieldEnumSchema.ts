import { z } from 'zod';

export const PatientScalarFieldEnumSchema = z.enum([
  'id',
  'first_name',
  'last_name',
  'date_of_birth',
  'gender',
  'phone',
  'email',
  'marital_status',
  'address',
  'emergency_contact_name',
  'emergency_contact_number',
  'relation',
  'blood_group',
  'allergies',
  'medical_conditions',
  'medical_history',
  'insurance_provider',
  'insurance_number',
  'privacy_consent',
  'service_consent',
  'medical_consent',
  'img',
  'colorCode',
  'created_at',
  'updated_at',
]);

export default PatientScalarFieldEnumSchema;
