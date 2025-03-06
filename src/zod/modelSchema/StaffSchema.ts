import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema';

/////////////////////////////////////////
// STAFF SCHEMA
/////////////////////////////////////////

export const StaffSchema = z.object({
  role: RoleSchema,
  status: StatusSchema,
  id: z.string(),
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  department: z.string().nullish(),
  img: z.string().nullish(),
  license_number: z.string().nullish(),
  colorCode: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Staff = z.infer<typeof StaffSchema>;

/////////////////////////////////////////
// STAFF PARTIAL SCHEMA
/////////////////////////////////////////

export const StaffPartialSchema = StaffSchema.partial();

export type StaffPartial = z.infer<typeof StaffPartialSchema>;

/////////////////////////////////////////
// STAFF OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StaffOptionalDefaultsSchema = StaffSchema.merge(
  z.object({
    status: StatusSchema.optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type StaffOptionalDefaults = z.infer<typeof StaffOptionalDefaultsSchema>;

export default StaffSchema;
