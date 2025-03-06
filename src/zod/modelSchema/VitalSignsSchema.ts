import { z } from 'zod';
import {
  MedicalRecordsOptionalDefaultsWithRelationsSchema,
  MedicalRecordsPartialWithRelationsSchema,
  MedicalRecordsWithRelationsSchema,
} from './MedicalRecordsSchema';
import type {
  MedicalRecordsOptionalDefaultsWithRelations,
  MedicalRecordsPartialWithRelations,
  MedicalRecordsWithRelations,
} from './MedicalRecordsSchema';

/////////////////////////////////////////
// VITAL SIGNS SCHEMA
/////////////////////////////////////////

export const VitalSignsSchema = z.object({
  id: z.number().int(),
  patient_id: z.string(),
  medical_id: z.number().int(),
  body_temperature: z.number(),
  systolic: z.number().int(),
  diastolic: z.number().int(),
  heartRate: z.string(),
  respiratory_rate: z.number().int().nullish(),
  oxygen_saturation: z.number().int().nullish(),
  weight: z.number(),
  height: z.number(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type VitalSigns = z.infer<typeof VitalSignsSchema>;

/////////////////////////////////////////
// VITAL SIGNS PARTIAL SCHEMA
/////////////////////////////////////////

export const VitalSignsPartialSchema = VitalSignsSchema.partial();

export type VitalSignsPartial = z.infer<typeof VitalSignsPartialSchema>;

/////////////////////////////////////////
// VITAL SIGNS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const VitalSignsOptionalDefaultsSchema = VitalSignsSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type VitalSignsOptionalDefaults = z.infer<typeof VitalSignsOptionalDefaultsSchema>;

/////////////////////////////////////////
// VITAL SIGNS RELATION SCHEMA
/////////////////////////////////////////

export type VitalSignsRelations = {
  medical: MedicalRecordsWithRelations;
};

export type VitalSignsWithRelations = z.infer<typeof VitalSignsSchema> & VitalSignsRelations;

export const VitalSignsWithRelationsSchema: z.ZodType<VitalSignsWithRelations> =
  VitalSignsSchema.merge(
    z.object({
      medical: z.lazy(() => MedicalRecordsWithRelationsSchema),
    }),
  );

/////////////////////////////////////////
// VITAL SIGNS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type VitalSignsOptionalDefaultsRelations = {
  medical: MedicalRecordsOptionalDefaultsWithRelations;
};

export type VitalSignsOptionalDefaultsWithRelations = z.infer<
  typeof VitalSignsOptionalDefaultsSchema
> &
  VitalSignsOptionalDefaultsRelations;

export const VitalSignsOptionalDefaultsWithRelationsSchema: z.ZodType<VitalSignsOptionalDefaultsWithRelations> =
  VitalSignsOptionalDefaultsSchema.merge(
    z.object({
      medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema),
    }),
  );

/////////////////////////////////////////
// VITAL SIGNS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type VitalSignsPartialRelations = {
  medical?: MedicalRecordsPartialWithRelations;
};

export type VitalSignsPartialWithRelations = z.infer<typeof VitalSignsPartialSchema> &
  VitalSignsPartialRelations;

export const VitalSignsPartialWithRelationsSchema: z.ZodType<VitalSignsPartialWithRelations> =
  VitalSignsPartialSchema.merge(
    z.object({
      medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
    }),
  ).partial();

export type VitalSignsOptionalDefaultsWithPartialRelations = z.infer<
  typeof VitalSignsOptionalDefaultsSchema
> &
  VitalSignsPartialRelations;

export const VitalSignsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<VitalSignsOptionalDefaultsWithPartialRelations> =
  VitalSignsOptionalDefaultsSchema.merge(
    z
      .object({
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export type VitalSignsWithPartialRelations = z.infer<typeof VitalSignsSchema> &
  VitalSignsPartialRelations;

export const VitalSignsWithPartialRelationsSchema: z.ZodType<VitalSignsWithPartialRelations> =
  VitalSignsSchema.merge(
    z
      .object({
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export default VitalSignsSchema;
