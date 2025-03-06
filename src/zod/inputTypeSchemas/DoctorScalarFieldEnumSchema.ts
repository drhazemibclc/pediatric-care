import { z } from 'zod';

export const DoctorScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'specialization',
  'license_number',
  'phone',
  'address',
  'department',
  'img',
  'colorCode',
  'availability_status',
  'type',
  'created_at',
  'updated_at',
]);

export default DoctorScalarFieldEnumSchema;
