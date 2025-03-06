import { z } from 'zod';

/////////////////////////////////////////
// AUDIT LOG SCHEMA
/////////////////////////////////////////

export const AuditLogSchema = z.object({
  id: z.number().int(),
  user_id: z.string(),
  record_id: z.string(),
  action: z.string(),
  details: z.string().nullish(),
  model: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type AuditLog = z.infer<typeof AuditLogSchema>;

/////////////////////////////////////////
// AUDIT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const AuditLogPartialSchema = AuditLogSchema.partial();

export type AuditLogPartial = z.infer<typeof AuditLogPartialSchema>;

/////////////////////////////////////////
// AUDIT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AuditLogOptionalDefaultsSchema = AuditLogSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type AuditLogOptionalDefaults = z.infer<typeof AuditLogOptionalDefaultsSchema>;

export default AuditLogSchema;
