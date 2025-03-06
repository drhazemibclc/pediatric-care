import { z } from 'zod';
import { PaymentMethodSchema } from '../inputTypeSchemas/PaymentMethodSchema';
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema';
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
  PatientBillsOptionalDefaultsWithRelationsSchema,
  PatientBillsPartialWithRelationsSchema,
  PatientBillsWithRelationsSchema,
} from './PatientBillsSchema';
import type {
  PatientBillsOptionalDefaultsWithRelations,
  PatientBillsPartialWithRelations,
  PatientBillsWithRelations,
} from './PatientBillsSchema';
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

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  payment_method: PaymentMethodSchema,
  status: PaymentStatusSchema,
  id: z.number().int(),
  bill_id: z.number().int().nullish(),
  patient_id: z.string(),
  appointment_id: z.number().int(),
  bill_date: z.coerce.date(),
  payment_date: z.coerce.date(),
  discount: z.number(),
  total_amount: z.number(),
  amount_paid: z.number(),
  receipt_number: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type Payment = z.infer<typeof PaymentSchema>;

/////////////////////////////////////////
// PAYMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PaymentPartialSchema = PaymentSchema.partial();

export type PaymentPartial = z.infer<typeof PaymentPartialSchema>;

/////////////////////////////////////////
// PAYMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PaymentOptionalDefaultsSchema = PaymentSchema.merge(
  z.object({
    payment_method: PaymentMethodSchema.optional(),
    status: PaymentStatusSchema.optional(),
    id: z.number().int().optional(),
    receipt_number: z.number().int().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  }),
);

export type PaymentOptionalDefaults = z.infer<typeof PaymentOptionalDefaultsSchema>;

/////////////////////////////////////////
// PAYMENT RELATION SCHEMA
/////////////////////////////////////////

export type PaymentRelations = {
  appointment: AppointmentWithRelations;
  patient: PatientWithRelations;
  bills: PatientBillsWithRelations[];
};

export type PaymentWithRelations = z.infer<typeof PaymentSchema> & PaymentRelations;

export const PaymentWithRelationsSchema: z.ZodType<PaymentWithRelations> = PaymentSchema.merge(
  z.object({
    appointment: z.lazy(() => AppointmentWithRelationsSchema),
    patient: z.lazy(() => PatientWithRelationsSchema),
    bills: z.lazy(() => PatientBillsWithRelationsSchema).array(),
  }),
);

/////////////////////////////////////////
// PAYMENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PaymentOptionalDefaultsRelations = {
  appointment: AppointmentOptionalDefaultsWithRelations;
  patient: PatientOptionalDefaultsWithRelations;
  bills: PatientBillsOptionalDefaultsWithRelations[];
};

export type PaymentOptionalDefaultsWithRelations = z.infer<typeof PaymentOptionalDefaultsSchema> &
  PaymentOptionalDefaultsRelations;

export const PaymentOptionalDefaultsWithRelationsSchema: z.ZodType<PaymentOptionalDefaultsWithRelations> =
  PaymentOptionalDefaultsSchema.merge(
    z.object({
      appointment: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema),
      patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
      bills: z.lazy(() => PatientBillsOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

/////////////////////////////////////////
// PAYMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PaymentPartialRelations = {
  appointment?: AppointmentPartialWithRelations;
  patient?: PatientPartialWithRelations;
  bills?: PatientBillsPartialWithRelations[];
};

export type PaymentPartialWithRelations = z.infer<typeof PaymentPartialSchema> &
  PaymentPartialRelations;

export const PaymentPartialWithRelationsSchema: z.ZodType<PaymentPartialWithRelations> =
  PaymentPartialSchema.merge(
    z.object({
      appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
      patient: z.lazy(() => PatientPartialWithRelationsSchema),
      bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type PaymentOptionalDefaultsWithPartialRelations = z.infer<
  typeof PaymentOptionalDefaultsSchema
> &
  PaymentPartialRelations;

export const PaymentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PaymentOptionalDefaultsWithPartialRelations> =
  PaymentOptionalDefaultsSchema.merge(
    z
      .object({
        appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type PaymentWithPartialRelations = z.infer<typeof PaymentSchema> & PaymentPartialRelations;

export const PaymentWithPartialRelationsSchema: z.ZodType<PaymentWithPartialRelations> =
  PaymentSchema.merge(
    z
      .object({
        appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
        patient: z.lazy(() => PatientPartialWithRelationsSchema),
        bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export default PaymentSchema;
