import { z } from 'zod';
import {
  AppointmentOptionalDefaultsWithRelationsSchema,
  AppointmentPartialWithRelationsSchema,
  AppointmentWithRelationsSchema,
} from './AppointmentSchema';
import type {
  AppointmentOptionalDefaultsWithRelations,
  AppointmentPartialWithRelations,
  AppointmentWithRelations,
} from './AppointmentSchema';
import {
  DiagnosisOptionalDefaultsWithRelationsSchema,
  DiagnosisPartialWithRelationsSchema,
  DiagnosisWithRelationsSchema,
} from './DiagnosisSchema';
import type {
  DiagnosisOptionalDefaultsWithRelations,
  DiagnosisPartialWithRelations,
  DiagnosisWithRelations,
} from './DiagnosisSchema';
import {
  LabTestOptionalDefaultsWithRelationsSchema,
  LabTestPartialWithRelationsSchema,
  LabTestWithRelationsSchema,
} from './LabTestSchema';
import type {
  LabTestOptionalDefaultsWithRelations,
  LabTestPartialWithRelations,
  LabTestWithRelations,
} from './LabTestSchema';
import {
  PatientOptionalDefaultsWithRelationsSchema,
  PatientPartialWithRelationsSchema,
  PatientWithRelationsSchema,
} from './PatientSchema';
import type {
  PatientOptionalDefaultsWithRelations,
  PatientPartialWithRelations,
  PatientWithRelations,
} from './PatientSchema';
import {
  VitalSignsOptionalDefaultsWithRelationsSchema,
  VitalSignsPartialWithRelationsSchema,
  VitalSignsWithRelationsSchema,
} from './VitalSignsSchema';
import type {
  VitalSignsOptionalDefaultsWithRelations,
  VitalSignsPartialWithRelations,
  VitalSignsWithRelations,
} from './VitalSignsSchema';

/////////////////////////////////////////
// MEDICAL RECORDS SCHEMA
/////////////////////////////////////////

export const MedicalRecordsSchema = z.object({
  id: z.number().int(),
  patient_id: z.string(),
  appointment_id: z.number().int(),
  doctor_id: z.string(),
  treatment_plan: z.string().nullish(),
  prescriptions: z.string().nullish(),
  lab_request: z.string().nullish(),
  notes: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type MedicalRecords = z.infer<typeof MedicalRecordsSchema>;

/////////////////////////////////////////
// MEDICAL RECORDS PARTIAL SCHEMA
/////////////////////////////////////////

export const MedicalRecordsPartialSchema = MedicalRecordsSchema.partial();

export type MedicalRecordsPartial = z.infer<typeof MedicalRecordsPartialSchema>;

/////////////////////////////////////////
// MEDICAL RECORDS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MedicalRecordsOptionalDefaultsSchema = MedicalRecordsSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type MedicalRecordsOptionalDefaults = z.infer<typeof MedicalRecordsOptionalDefaultsSchema>;

/////////////////////////////////////////
// MEDICAL RECORDS RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsRelations = {
  appointment: AppointmentWithRelations;
  patient: PatientWithRelations;
  lab_test: LabTestWithRelations[];
  vital_signs: VitalSignsWithRelations[];
  diagnosis: DiagnosisWithRelations[];
};

export type MedicalRecordsWithRelations = z.infer<typeof MedicalRecordsSchema> &
  MedicalRecordsRelations;

export const MedicalRecordsWithRelationsSchema: z.ZodType<MedicalRecordsWithRelations> =
  MedicalRecordsSchema.merge(
    z.object({
      appointment: z.lazy(() => AppointmentWithRelationsSchema),
      patient: z.lazy(() => PatientWithRelationsSchema),
      lab_test: z.lazy(() => LabTestWithRelationsSchema).array(),
      vital_signs: z.lazy(() => VitalSignsWithRelationsSchema).array(),
      diagnosis: z.lazy(() => DiagnosisWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// MEDICAL RECORDS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsOptionalDefaultsRelations = {
  appointment: AppointmentOptionalDefaultsWithRelations;
  patient: PatientOptionalDefaultsWithRelations;
  lab_test: LabTestOptionalDefaultsWithRelations[];
  vital_signs: VitalSignsOptionalDefaultsWithRelations[];
  diagnosis: DiagnosisOptionalDefaultsWithRelations[];
};

export type MedicalRecordsOptionalDefaultsWithRelations = z.infer<
  typeof MedicalRecordsOptionalDefaultsSchema
> &
  MedicalRecordsOptionalDefaultsRelations;

export const MedicalRecordsOptionalDefaultsWithRelationsSchema: z.ZodType<MedicalRecordsOptionalDefaultsWithRelations> =
  MedicalRecordsOptionalDefaultsSchema.merge(
    z.object({
      appointment: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema),
      patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
      lab_test: z.lazy(() => LabTestOptionalDefaultsWithRelationsSchema).array(),
      vital_signs: z.lazy(() => VitalSignsOptionalDefaultsWithRelationsSchema).array(),
      diagnosis: z.lazy(() => DiagnosisOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// MEDICAL RECORDS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsPartialRelations = {
  appointment?: AppointmentPartialWithRelations;
  patient?: PatientPartialWithRelations;
  lab_test?: LabTestPartialWithRelations[];
  vital_signs?: VitalSignsPartialWithRelations[];
  diagnosis?: DiagnosisPartialWithRelations[];
};

export type MedicalRecordsPartialWithRelations = z.infer<typeof MedicalRecordsPartialSchema> &
  MedicalRecordsPartialRelations;

export const MedicalRecordsPartialWithRelationsSchema: z.ZodType<MedicalRecordsPartialWithRelations> =
  MedicalRecordsPartialSchema.merge(
    z.object({
      appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
      patient: z.lazy(() => PatientPartialWithRelationsSchema),
      lab_test: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
      vital_signs: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
      diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type MedicalRecordsOptionalDefaultsWithPartialRelations = z.infer<
  typeof MedicalRecordsOptionalDefaultsSchema
> &
  MedicalRecordsPartialRelations;

export const MedicalRecordsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<MedicalRecordsOptionalDefaultsWithPartialRelations> =
  MedicalRecordsOptionalDefaultsSchema.merge(
    z
      .object({
        appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        lab_test: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
        vital_signs: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
        diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type MedicalRecordsWithPartialRelations = z.infer<typeof MedicalRecordsSchema> &
  MedicalRecordsPartialRelations;

export const MedicalRecordsWithPartialRelationsSchema: z.ZodType<MedicalRecordsWithPartialRelations> =
  MedicalRecordsSchema.merge(
    z
      .object({
        appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        lab_test: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
        vital_signs: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
        diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default MedicalRecordsSchema;
