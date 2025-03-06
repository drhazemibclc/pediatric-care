import { z } from 'zod';
import { GenderSchema } from '../inputTypeSchemas/GenderSchema';
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
  MedicalRecordsOptionalDefaultsWithRelationsSchema,
  MedicalRecordsPartialWithRelationsSchema,
  MedicalRecordsWithRelationsSchema,
} from './MedicalRecordsSchema';
import type {
  MedicalRecordsOptionalDefaultsWithRelations,
  MedicalRecordsPartialWithRelations,
  MedicalRecordsWithRelations,
} from './MedicalRecordsSchema';
import {
  PaymentOptionalDefaultsWithRelationsSchema,
  PaymentPartialWithRelationsSchema,
  PaymentWithRelationsSchema,
} from './PaymentSchema';
import type {
  PaymentOptionalDefaultsWithRelations,
  PaymentPartialWithRelations,
  PaymentWithRelations,
} from './PaymentSchema';
import {
  RatingOptionalDefaultsWithRelationsSchema,
  RatingPartialWithRelationsSchema,
  RatingWithRelationsSchema,
} from './RatingSchema';
import type {
  RatingOptionalDefaultsWithRelations,
  RatingPartialWithRelations,
  RatingWithRelations,
} from './RatingSchema';

/////////////////////////////////////////
// PATIENT SCHEMA
/////////////////////////////////////////

export const PatientSchema = z.object({
  gender: GenderSchema,
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  phone: z.string(),
  email: z.string(),
  marital_status: z.string(),
  address: z.string(),
  emergency_contact_name: z.string(),
  emergency_contact_number: z.string(),
  relation: z.string(),
  blood_group: z.string().nullish(),
  allergies: z.string().nullish(),
  medical_conditions: z.string().nullish(),
  medical_history: z.string().nullish(),
  insurance_provider: z.string().nullish(),
  insurance_number: z.string().nullish(),
  privacy_consent: z.boolean(),
  service_consent: z.boolean(),
  medical_consent: z.boolean(),
  img: z.string().nullish(),
  colorCode: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Patient = z.infer<typeof PatientSchema>;

/////////////////////////////////////////
// PATIENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PatientPartialSchema = PatientSchema.partial();

export type PatientPartial = z.infer<typeof PatientPartialSchema>;

/////////////////////////////////////////
// PATIENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PatientOptionalDefaultsSchema = PatientSchema.merge(
  z.object({
    gender: GenderSchema.optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type PatientOptionalDefaults = z.infer<typeof PatientOptionalDefaultsSchema>;

/////////////////////////////////////////
// PATIENT RELATION SCHEMA
/////////////////////////////////////////

export type PatientRelations = {
  appointments: AppointmentWithRelations[];
  medical: MedicalRecordsWithRelations[];
  payments: PaymentWithRelations[];
  ratings: RatingWithRelations[];
};

export type PatientWithRelations = z.infer<typeof PatientSchema> & PatientRelations;

export const PatientWithRelationsSchema: z.ZodType<PatientWithRelations> = PatientSchema.merge(
  z.object({
    appointments: z.lazy(() => AppointmentWithRelationsSchema).array(),
    medical: z.lazy(() => MedicalRecordsWithRelationsSchema).array(),
    payments: z.lazy(() => PaymentWithRelationsSchema).array(),
    ratings: z.lazy(() => RatingWithRelationsSchema).array(),
  }),
);

/////////////////////////////////////////
// PATIENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PatientOptionalDefaultsRelations = {
  appointments: AppointmentOptionalDefaultsWithRelations[];
  medical: MedicalRecordsOptionalDefaultsWithRelations[];
  payments: PaymentOptionalDefaultsWithRelations[];
  ratings: RatingOptionalDefaultsWithRelations[];
};

export type PatientOptionalDefaultsWithRelations = z.infer<typeof PatientOptionalDefaultsSchema> &
  PatientOptionalDefaultsRelations;

export const PatientOptionalDefaultsWithRelationsSchema: z.ZodType<PatientOptionalDefaultsWithRelations> =
  PatientOptionalDefaultsSchema.merge(
    z.object({
      appointments: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema).array(),
      medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema).array(),
      payments: z.lazy(() => PaymentOptionalDefaultsWithRelationsSchema).array(),
      ratings: z.lazy(() => RatingOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// PATIENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PatientPartialRelations = {
  appointments?: AppointmentPartialWithRelations[];
  medical?: MedicalRecordsPartialWithRelations[];
  payments?: PaymentPartialWithRelations[];
  ratings?: RatingPartialWithRelations[];
};

export type PatientPartialWithRelations = z.infer<typeof PatientPartialSchema> &
  PatientPartialRelations;

export const PatientPartialWithRelationsSchema: z.ZodType<PatientPartialWithRelations> =
  PatientPartialSchema.merge(
    z.object({
      appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
      medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
      payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
      ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type PatientOptionalDefaultsWithPartialRelations = z.infer<
  typeof PatientOptionalDefaultsSchema
> &
  PatientPartialRelations;

export const PatientOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PatientOptionalDefaultsWithPartialRelations> =
  PatientOptionalDefaultsSchema.merge(
    z
      .object({
        appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
        payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
        ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type PatientWithPartialRelations = z.infer<typeof PatientSchema> & PatientPartialRelations;

export const PatientWithPartialRelationsSchema: z.ZodType<PatientWithPartialRelations> =
  PatientSchema.merge(
    z
      .object({
        appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
        payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
        ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default PatientSchema;
