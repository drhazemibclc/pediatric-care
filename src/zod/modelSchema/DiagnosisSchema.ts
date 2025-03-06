import { z } from 'zod';
import {
  DoctorOptionalDefaultsWithRelationsSchema,
  DoctorPartialWithRelationsSchema,
  DoctorWithRelationsSchema,
} from './DoctorSchema';
import type {
  DoctorOptionalDefaultsWithRelations,
  DoctorPartialWithRelations,
  DoctorWithRelations,
} from './DoctorSchema';
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
// DIAGNOSIS SCHEMA
/////////////////////////////////////////

export const DiagnosisSchema = z.object({
  id: z.number().int(),
  patient_id: z.string(),
  medical_id: z.number().int(),
  doctor_id: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().nullish(),
  prescribed_medications: z.string().nullish(),
  follow_up_plan: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Diagnosis = z.infer<typeof DiagnosisSchema>;

/////////////////////////////////////////
// DIAGNOSIS PARTIAL SCHEMA
/////////////////////////////////////////

export const DiagnosisPartialSchema = DiagnosisSchema.partial();

export type DiagnosisPartial = z.infer<typeof DiagnosisPartialSchema>;

/////////////////////////////////////////
// DIAGNOSIS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DiagnosisOptionalDefaultsSchema = DiagnosisSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type DiagnosisOptionalDefaults = z.infer<typeof DiagnosisOptionalDefaultsSchema>;

/////////////////////////////////////////
// DIAGNOSIS RELATION SCHEMA
/////////////////////////////////////////

export type DiagnosisRelations = {
  doctor: DoctorWithRelations;
  medical: MedicalRecordsWithRelations;
};

export type DiagnosisWithRelations = z.infer<typeof DiagnosisSchema> & DiagnosisRelations;

export const DiagnosisWithRelationsSchema: z.ZodType<DiagnosisWithRelations> =
  DiagnosisSchema.merge(
    z.object({
      doctor: z.lazy(() => DoctorWithRelationsSchema),
      medical: z.lazy(() => MedicalRecordsWithRelationsSchema),
    }),
  );

/////////////////////////////////////////
// DIAGNOSIS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type DiagnosisOptionalDefaultsRelations = {
  doctor: DoctorOptionalDefaultsWithRelations;
  medical: MedicalRecordsOptionalDefaultsWithRelations;
};

export type DiagnosisOptionalDefaultsWithRelations = z.infer<
  typeof DiagnosisOptionalDefaultsSchema
> &
  DiagnosisOptionalDefaultsRelations;

export const DiagnosisOptionalDefaultsWithRelationsSchema: z.ZodType<DiagnosisOptionalDefaultsWithRelations> =
  DiagnosisOptionalDefaultsSchema.merge(
    z.object({
      doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema),
      medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema),
    }),
  );

/////////////////////////////////////////
// DIAGNOSIS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DiagnosisPartialRelations = {
  doctor?: DoctorPartialWithRelations;
  medical?: MedicalRecordsPartialWithRelations;
};

export type DiagnosisPartialWithRelations = z.infer<typeof DiagnosisPartialSchema> &
  DiagnosisPartialRelations;

export const DiagnosisPartialWithRelationsSchema: z.ZodType<DiagnosisPartialWithRelations> =
  DiagnosisPartialSchema.merge(
    z.object({
      doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
      medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
    }),
  ).partial();

export type DiagnosisOptionalDefaultsWithPartialRelations = z.infer<
  typeof DiagnosisOptionalDefaultsSchema
> &
  DiagnosisPartialRelations;

export const DiagnosisOptionalDefaultsWithPartialRelationsSchema: z.ZodType<DiagnosisOptionalDefaultsWithPartialRelations> =
  DiagnosisOptionalDefaultsSchema.merge(
    z
      .object({
        doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export type DiagnosisWithPartialRelations = z.infer<typeof DiagnosisSchema> &
  DiagnosisPartialRelations;

export const DiagnosisWithPartialRelationsSchema: z.ZodType<DiagnosisWithPartialRelations> =
  DiagnosisSchema.merge(
    z
      .object({
        doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export default DiagnosisSchema;
