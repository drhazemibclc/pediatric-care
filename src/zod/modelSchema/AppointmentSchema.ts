import { z } from 'zod';
import { AppointmentStatusSchema } from '../inputTypeSchemas/AppointmentStatusSchema';
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
  PaymentOptionalDefaultsWithRelationsSchema,
  PaymentPartialWithRelationsSchema,
  PaymentWithRelationsSchema,
} from './PaymentSchema';
import type {
  PaymentOptionalDefaultsWithRelations,
  PaymentPartialWithRelations,
  PaymentWithRelations,
} from './PaymentSchema';

/////////////////////////////////////////
// APPOINTMENT SCHEMA
/////////////////////////////////////////

export const AppointmentSchema = z.object({
  status: AppointmentStatusSchema,
  id: z.number().int(),
  patient_id: z.string(),
  doctor_id: z.string(),
  appointment_date: z.coerce.date(),
  time: z.string(),
  type: z.string(),
  note: z.string().nullish(),
  reason: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Appointment = z.infer<typeof AppointmentSchema>;

/////////////////////////////////////////
// APPOINTMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const AppointmentPartialSchema = AppointmentSchema.partial();

export type AppointmentPartial = z.infer<typeof AppointmentPartialSchema>;

/////////////////////////////////////////
// APPOINTMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AppointmentOptionalDefaultsSchema = AppointmentSchema.merge(
  z.object({
    status: AppointmentStatusSchema.optional(),
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type AppointmentOptionalDefaults = z.infer<typeof AppointmentOptionalDefaultsSchema>;

/////////////////////////////////////////
// APPOINTMENT RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentRelations = {
  patient: PatientWithRelations;
  doctor: DoctorWithRelations;
  bills: PaymentWithRelations[];
  medical: MedicalRecordsWithRelations[];
};

export type AppointmentWithRelations = z.infer<typeof AppointmentSchema> & AppointmentRelations;

export const AppointmentWithRelationsSchema: z.ZodType<AppointmentWithRelations> =
  AppointmentSchema.merge(
    z.object({
      patient: z.lazy(() => PatientWithRelationsSchema),
      doctor: z.lazy(() => DoctorWithRelationsSchema),
      bills: z.lazy(() => PaymentWithRelationsSchema).array(),
      medical: z.lazy(() => MedicalRecordsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// APPOINTMENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentOptionalDefaultsRelations = {
  patient: PatientOptionalDefaultsWithRelations;
  doctor: DoctorOptionalDefaultsWithRelations;
  bills: PaymentOptionalDefaultsWithRelations[];
  medical: MedicalRecordsOptionalDefaultsWithRelations[];
};

export type AppointmentOptionalDefaultsWithRelations = z.infer<
  typeof AppointmentOptionalDefaultsSchema
> &
  AppointmentOptionalDefaultsRelations;

export const AppointmentOptionalDefaultsWithRelationsSchema: z.ZodType<AppointmentOptionalDefaultsWithRelations> =
  AppointmentOptionalDefaultsSchema.merge(
    z.object({
      patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
      doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema),
      bills: z.lazy(() => PaymentOptionalDefaultsWithRelationsSchema).array(),
      medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// APPOINTMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentPartialRelations = {
  patient?: PatientPartialWithRelations;
  doctor?: DoctorPartialWithRelations;
  bills?: PaymentPartialWithRelations[];
  medical?: MedicalRecordsPartialWithRelations[];
};

export type AppointmentPartialWithRelations = z.infer<typeof AppointmentPartialSchema> &
  AppointmentPartialRelations;

export const AppointmentPartialWithRelationsSchema: z.ZodType<AppointmentPartialWithRelations> =
  AppointmentPartialSchema.merge(
    z.object({
      patient: z.lazy(() => PatientPartialWithRelationsSchema),
      doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
      bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
      medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type AppointmentOptionalDefaultsWithPartialRelations = z.infer<
  typeof AppointmentOptionalDefaultsSchema
> &
  AppointmentPartialRelations;

export const AppointmentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AppointmentOptionalDefaultsWithPartialRelations> =
  AppointmentOptionalDefaultsSchema.merge(
    z
      .object({
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
        bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type AppointmentWithPartialRelations = z.infer<typeof AppointmentSchema> &
  AppointmentPartialRelations;

export const AppointmentWithPartialRelationsSchema: z.ZodType<AppointmentWithPartialRelations> =
  AppointmentSchema.merge(
    z
      .object({
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
        bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
        medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default AppointmentSchema;
