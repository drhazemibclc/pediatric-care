import { z } from 'zod';
import { JOBTYPESchema } from '../inputTypeSchemas/JOBTYPESchema';
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
  RatingOptionalDefaultsWithRelationsSchema,
  RatingPartialWithRelationsSchema,
  RatingWithRelationsSchema,
} from './RatingSchema';
import type {
  RatingOptionalDefaultsWithRelations,
  RatingPartialWithRelations,
  RatingWithRelations,
} from './RatingSchema';
import {
  WorkingDaysOptionalDefaultsWithRelationsSchema,
  WorkingDaysPartialWithRelationsSchema,
  WorkingDaysWithRelationsSchema,
} from './WorkingDaysSchema';
import type {
  WorkingDaysOptionalDefaultsWithRelations,
  WorkingDaysPartialWithRelations,
  WorkingDaysWithRelations,
} from './WorkingDaysSchema';

/////////////////////////////////////////
// DOCTOR SCHEMA
/////////////////////////////////////////

export const DoctorSchema = z.object({
  type: JOBTYPESchema,
  id: z.string(),
  email: z.string(),
  name: z.string(),
  specialization: z.string(),
  license_number: z.string(),
  phone: z.string(),
  address: z.string(),
  department: z.string().nullish(),
  img: z.string().nullish(),
  colorCode: z.string().nullish(),
  availability_status: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Doctor = z.infer<typeof DoctorSchema>;

/////////////////////////////////////////
// DOCTOR PARTIAL SCHEMA
/////////////////////////////////////////

export const DoctorPartialSchema = DoctorSchema.partial();

export type DoctorPartial = z.infer<typeof DoctorPartialSchema>;

/////////////////////////////////////////
// DOCTOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DoctorOptionalDefaultsSchema = DoctorSchema.merge(
  z.object({
    type: JOBTYPESchema.optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type DoctorOptionalDefaults = z.infer<typeof DoctorOptionalDefaultsSchema>;

/////////////////////////////////////////
// DOCTOR RELATION SCHEMA
/////////////////////////////////////////

export type DoctorRelations = {
  working_days: WorkingDaysWithRelations[];
  appointments: AppointmentWithRelations[];
  ratings: RatingWithRelations[];
  diagnosis: DiagnosisWithRelations[];
};

export type DoctorWithRelations = z.infer<typeof DoctorSchema> & DoctorRelations;

export const DoctorWithRelationsSchema: z.ZodType<DoctorWithRelations> = DoctorSchema.merge(
  z.object({
    working_days: z.lazy(() => WorkingDaysWithRelationsSchema).array(),
    appointments: z.lazy(() => AppointmentWithRelationsSchema).array(),
    ratings: z.lazy(() => RatingWithRelationsSchema).array(),
    diagnosis: z.lazy(() => DiagnosisWithRelationsSchema).array(),
  }),
);

/////////////////////////////////////////
// DOCTOR OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type DoctorOptionalDefaultsRelations = {
  working_days: WorkingDaysOptionalDefaultsWithRelations[];
  appointments: AppointmentOptionalDefaultsWithRelations[];
  ratings: RatingOptionalDefaultsWithRelations[];
  diagnosis: DiagnosisOptionalDefaultsWithRelations[];
};

export type DoctorOptionalDefaultsWithRelations = z.infer<typeof DoctorOptionalDefaultsSchema> &
  DoctorOptionalDefaultsRelations;

export const DoctorOptionalDefaultsWithRelationsSchema: z.ZodType<DoctorOptionalDefaultsWithRelations> =
  DoctorOptionalDefaultsSchema.merge(
    z.object({
      working_days: z.lazy(() => WorkingDaysOptionalDefaultsWithRelationsSchema).array(),
      appointments: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema).array(),
      ratings: z.lazy(() => RatingOptionalDefaultsWithRelationsSchema).array(),
      diagnosis: z.lazy(() => DiagnosisOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// DOCTOR PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DoctorPartialRelations = {
  working_days?: WorkingDaysPartialWithRelations[];
  appointments?: AppointmentPartialWithRelations[];
  ratings?: RatingPartialWithRelations[];
  diagnosis?: DiagnosisPartialWithRelations[];
};

export type DoctorPartialWithRelations = z.infer<typeof DoctorPartialSchema> &
  DoctorPartialRelations;

export const DoctorPartialWithRelationsSchema: z.ZodType<DoctorPartialWithRelations> =
  DoctorPartialSchema.merge(
    z.object({
      working_days: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
      appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
      ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
      diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type DoctorOptionalDefaultsWithPartialRelations = z.infer<
  typeof DoctorOptionalDefaultsSchema
> &
  DoctorPartialRelations;

export const DoctorOptionalDefaultsWithPartialRelationsSchema: z.ZodType<DoctorOptionalDefaultsWithPartialRelations> =
  DoctorOptionalDefaultsSchema.merge(
    z
      .object({
        working_days: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
        appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
        ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
        diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type DoctorWithPartialRelations = z.infer<typeof DoctorSchema> & DoctorPartialRelations;

export const DoctorWithPartialRelationsSchema: z.ZodType<DoctorWithPartialRelations> =
  DoctorSchema.merge(
    z
      .object({
        working_days: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
        appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
        ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
        diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default DoctorSchema;
