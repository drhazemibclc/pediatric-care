import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema } from './MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema } from './PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema';
import { RatingUncheckedUpdateManyWithoutPatientNestedInputSchema } from './RatingUncheckedUpdateManyWithoutPatientNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PatientUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutAppointmentsInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      first_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      last_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      date_of_birth: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      gender: z
        .union([
          z.lazy(() => GenderSchema),
          z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      marital_status: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      address: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      emergency_contact_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      emergency_contact_number: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      relation: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      blood_group: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      allergies: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      medical_conditions: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      medical_history: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      insurance_provider: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      insurance_number: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      privacy_consent: z
        .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
        .optional(),
      service_consent: z
        .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
        .optional(),
      medical_consent: z
        .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
        .optional(),
      img: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      colorCode: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      medical: z
        .lazy(() => MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema)
        .optional(),
      payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
      ratings: z.lazy(() => RatingUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
    })
    .strict();

export default PatientUncheckedUpdateWithoutAppointmentsInputSchema;
