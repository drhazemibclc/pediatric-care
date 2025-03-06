import { z } from 'zod';

export const ServicesScalarFieldEnumSchema = z.enum([
  'id',
  'service_name',
  'description',
  'price',
  'created_at',
  'updated_at',
]);

export default ServicesScalarFieldEnumSchema;
