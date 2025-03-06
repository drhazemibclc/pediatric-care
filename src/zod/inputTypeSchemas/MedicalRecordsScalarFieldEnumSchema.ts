import { z } from 'zod';

export const MedicalRecordsScalarFieldEnumSchema = z.enum([
  'id',
  'patient_id',
  'appointment_id',
  'doctor_id',
  'treatment_plan',
  'prescriptions',
  'lab_request',
  'notes',
  'created_at',
  'updated_at',
]);

export default MedicalRecordsScalarFieldEnumSchema;
