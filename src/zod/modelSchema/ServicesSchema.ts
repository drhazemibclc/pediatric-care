import { z } from 'zod';
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
  PatientBillsOptionalDefaultsWithRelationsSchema,
  PatientBillsPartialWithRelationsSchema,
  PatientBillsWithRelationsSchema,
} from './PatientBillsSchema';
import type {
  PatientBillsOptionalDefaultsWithRelations,
  PatientBillsPartialWithRelations,
  PatientBillsWithRelations,
} from './PatientBillsSchema';

/////////////////////////////////////////
// SERVICES SCHEMA
/////////////////////////////////////////

export const ServicesSchema = z.object({
  id: z.number().int(),
  service_name: z.string(),
  description: z.string(),
  price: z.number(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Services = z.infer<typeof ServicesSchema>;

/////////////////////////////////////////
// SERVICES PARTIAL SCHEMA
/////////////////////////////////////////

export const ServicesPartialSchema = ServicesSchema.partial();

export type ServicesPartial = z.infer<typeof ServicesPartialSchema>;

/////////////////////////////////////////
// SERVICES OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ServicesOptionalDefaultsSchema = ServicesSchema.merge(
  z.object({
    id: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type ServicesOptionalDefaults = z.infer<typeof ServicesOptionalDefaultsSchema>;

/////////////////////////////////////////
// SERVICES RELATION SCHEMA
/////////////////////////////////////////

export type ServicesRelations = {
  labtest?: LabTestWithRelations | null;
  bills: PatientBillsWithRelations[];
};

export type ServicesWithRelations = z.infer<typeof ServicesSchema> & ServicesRelations;

export const ServicesWithRelationsSchema: z.ZodType<ServicesWithRelations> = ServicesSchema.merge(
  z.object({
    labtest: z.lazy(() => LabTestWithRelationsSchema).nullish(),
    bills: z.lazy(() => PatientBillsWithRelationsSchema).array(),
  }),
);

/////////////////////////////////////////
// SERVICES OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ServicesOptionalDefaultsRelations = {
  labtest?: LabTestOptionalDefaultsWithRelations | null;
  bills: PatientBillsOptionalDefaultsWithRelations[];
};

export type ServicesOptionalDefaultsWithRelations = z.infer<typeof ServicesOptionalDefaultsSchema> &
  ServicesOptionalDefaultsRelations;

export const ServicesOptionalDefaultsWithRelationsSchema: z.ZodType<ServicesOptionalDefaultsWithRelations> =
  ServicesOptionalDefaultsSchema.merge(
    z.object({
      labtest: z.lazy(() => LabTestOptionalDefaultsWithRelationsSchema).nullish(),
      bills: z.lazy(() => PatientBillsOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// SERVICES PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ServicesPartialRelations = {
  labtest?: LabTestPartialWithRelations | null;
  bills?: PatientBillsPartialWithRelations[];
};

export type ServicesPartialWithRelations = z.infer<typeof ServicesPartialSchema> &
  ServicesPartialRelations;

export const ServicesPartialWithRelationsSchema: z.ZodType<ServicesPartialWithRelations> =
  ServicesPartialSchema.merge(
    z.object({
      labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
      bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type ServicesOptionalDefaultsWithPartialRelations = z.infer<
  typeof ServicesOptionalDefaultsSchema
> &
  ServicesPartialRelations;

export const ServicesOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ServicesOptionalDefaultsWithPartialRelations> =
  ServicesOptionalDefaultsSchema.merge(
    z
      .object({
        labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
        bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type ServicesWithPartialRelations = z.infer<typeof ServicesSchema> &
  ServicesPartialRelations;

export const ServicesWithPartialRelationsSchema: z.ZodType<ServicesWithPartialRelations> =
  ServicesSchema.merge(
    z
      .object({
        labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
        bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default ServicesSchema;
