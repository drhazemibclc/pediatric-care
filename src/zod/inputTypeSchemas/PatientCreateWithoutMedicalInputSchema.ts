import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedManyWithoutPatientInputSchema } from './AppointmentCreateNestedManyWithoutPatientInputSchema';
import { GenderSchema } from './GenderSchema';
import { PaymentCreateNestedManyWithoutPatientInputSchema } from './PaymentCreateNestedManyWithoutPatientInputSchema';
import { RatingCreateNestedManyWithoutPatientInputSchema } from './RatingCreateNestedManyWithoutPatientInputSchema';

export const PatientCreateWithoutMedicalInputSchema: z.ZodType<Prisma.PatientCreateWithoutMedicalInput> =
  z
    .object({
      id: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      date_of_birth: z.coerce.date(),
      gender: z.lazy(() => GenderSchema).optional(),
      phone: z.string(),
      email: z.string(),
      marital_status: z.string(),
      address: z.string(),
      emergency_contact_name: z.string(),
      emergency_contact_number: z.string(),
      relation: z.string(),
      blood_group: z.string().optional().nullable(),
      allergies: z.string().optional().nullable(),
      medical_conditions: z.string().optional().nullable(),
      medical_history: z.string().optional().nullable(),
      insurance_provider: z.string().optional().nullable(),
      insurance_number: z.string().optional().nullable(),
      privacy_consent: z.boolean(),
      service_consent: z.boolean(),
      medical_consent: z.boolean(),
      img: z.string().optional().nullable(),
      colorCode: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      appointments: z.lazy(() => AppointmentCreateNestedManyWithoutPatientInputSchema).optional(),
      payments: z.lazy(() => PaymentCreateNestedManyWithoutPatientInputSchema).optional(),
      ratings: z.lazy(() => RatingCreateNestedManyWithoutPatientInputSchema).optional(),
    })
    .strict();

export default PatientCreateWithoutMedicalInputSchema;
