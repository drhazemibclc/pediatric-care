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
import {
  ServicesOptionalDefaultsWithRelationsSchema,
  ServicesPartialWithRelationsSchema,
  ServicesWithRelationsSchema,
} from './ServicesSchema';
import type {
  ServicesOptionalDefaultsWithRelations,
  ServicesPartialWithRelations,
  ServicesWithRelations,
} from './ServicesSchema';

/////////////////////////////////////////
// LAB TEST SCHEMA
/////////////////////////////////////////

export const LabTestSchema = z.object({
  id: z.number().int(),
  record_id: z.number().int(),
  test_date: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().nullish(),
  service_id: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type LabTest = z.infer<typeof LabTestSchema>;

/////////////////////////////////////////
// LAB TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const LabTestPartialSchema = LabTestSchema.partial();

export type LabTestPartial = z.infer<typeof LabTestPartialSchema>;

/////////////////////////////////////////
// LAB TEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LabTestOptionalDefaultsSchema = LabTestSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type LabTestOptionalDefaults = z.infer<typeof LabTestOptionalDefaultsSchema>;

/////////////////////////////////////////
// LAB TEST RELATION SCHEMA
/////////////////////////////////////////

export type LabTestRelations = {
  services: ServicesWithRelations;
  medical_record: MedicalRecordsWithRelations;
};

export type LabTestWithRelations = z.infer<typeof LabTestSchema> & LabTestRelations;

export const LabTestWithRelationsSchema: z.ZodType<LabTestWithRelations> = LabTestSchema.merge(
  z.object({
    services: z.lazy(() => ServicesWithRelationsSchema),
    medical_record: z.lazy(() => MedicalRecordsWithRelationsSchema),
  }),
);

/////////////////////////////////////////
// LAB TEST OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type LabTestOptionalDefaultsRelations = {
  services: ServicesOptionalDefaultsWithRelations;
  medical_record: MedicalRecordsOptionalDefaultsWithRelations;
};

export type LabTestOptionalDefaultsWithRelations = z.infer<typeof LabTestOptionalDefaultsSchema> &
  LabTestOptionalDefaultsRelations;

export const LabTestOptionalDefaultsWithRelationsSchema: z.ZodType<LabTestOptionalDefaultsWithRelations> =
  LabTestOptionalDefaultsSchema.merge(
    z.object({
      services: z.lazy(() => ServicesOptionalDefaultsWithRelationsSchema),
      medical_record: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema),
    }),
  );

/////////////////////////////////////////
// LAB TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabTestPartialRelations = {
  services?: ServicesPartialWithRelations;
  medical_record?: MedicalRecordsPartialWithRelations;
};

export type LabTestPartialWithRelations = z.infer<typeof LabTestPartialSchema> &
  LabTestPartialRelations;

export const LabTestPartialWithRelationsSchema: z.ZodType<LabTestPartialWithRelations> =
  LabTestPartialSchema.merge(
    z.object({
      services: z.lazy(() => ServicesPartialWithRelationsSchema),
      medical_record: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
    }),
  ).partial();

export type LabTestOptionalDefaultsWithPartialRelations = z.infer<
  typeof LabTestOptionalDefaultsSchema
> &
  LabTestPartialRelations;

export const LabTestOptionalDefaultsWithPartialRelationsSchema: z.ZodType<LabTestOptionalDefaultsWithPartialRelations> =
  LabTestOptionalDefaultsSchema.merge(
    z
      .object({
        services: z.lazy(() => ServicesPartialWithRelationsSchema),
        medical_record: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export type LabTestWithPartialRelations = z.infer<typeof LabTestSchema> & LabTestPartialRelations;

export const LabTestWithPartialRelationsSchema: z.ZodType<LabTestWithPartialRelations> =
  LabTestSchema.merge(
    z
      .object({
        services: z.lazy(() => ServicesPartialWithRelationsSchema),
        medical_record: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
      })
      .partial(),
  );

export default LabTestSchema;
