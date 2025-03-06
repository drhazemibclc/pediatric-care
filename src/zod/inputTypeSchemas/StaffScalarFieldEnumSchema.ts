import { z } from 'zod';

export const StaffScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'phone',
  'address',
  'department',
  'img',
  'license_number',
  'colorCode',
  'role',
  'status',
  'created_at',
  'updated_at',
]);

export default StaffScalarFieldEnumSchema;
