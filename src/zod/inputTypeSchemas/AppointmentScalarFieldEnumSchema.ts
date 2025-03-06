import { z } from 'zod';

export const AppointmentScalarFieldEnumSchema = z.enum([
  'id',
  'patient_id',
  'doctor_id',
  'appointment_date',
  'time',
  'status',
  'type',
  'note',
  'reason',
  'created_at',
  'updated_at',
]);

export default AppointmentScalarFieldEnumSchema;
