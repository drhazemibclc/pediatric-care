import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUpdateManyWithoutPatientNestedInputSchema } from './AppointmentUpdateManyWithoutPatientNestedInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { MedicalRecordsUpdateManyWithoutPatientNestedInputSchema } from './MedicalRecordsUpdateManyWithoutPatientNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PaymentUpdateManyWithoutPatientNestedInputSchema } from './PaymentUpdateManyWithoutPatientNestedInputSchema';
import { RatingUpdateManyWithoutPatientNestedInputSchema } from './RatingUpdateManyWithoutPatientNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PatientUpdateInputSchema: z.ZodType<Prisma.PatientUpdateInput> = z
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
      .union([z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema)])
      .optional(),
    phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    marital_status: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
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
    appointments: z.lazy(() => AppointmentUpdateManyWithoutPatientNestedInputSchema).optional(),
    medical: z.lazy(() => MedicalRecordsUpdateManyWithoutPatientNestedInputSchema).optional(),
    payments: z.lazy(() => PaymentUpdateManyWithoutPatientNestedInputSchema).optional(),
    ratings: z.lazy(() => RatingUpdateManyWithoutPatientNestedInputSchema).optional(),
  })
  .strict();

export default PatientUpdateInputSchema;
