import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientIncludeSchema } from '../inputTypeSchemas/PatientIncludeSchema';
import { PatientUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientUncheckedUpdateInputSchema';
import { PatientUpdateInputSchema } from '../inputTypeSchemas/PatientUpdateInputSchema';
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema';
import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema';
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema';
import { PatientCountOutputTypeArgsSchema } from '../outputTypeSchemas/PatientCountOutputTypeArgsSchema';
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema';
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z
  .object({
    id: z.boolean().optional(),
    first_name: z.boolean().optional(),
    last_name: z.boolean().optional(),
    date_of_birth: z.boolean().optional(),
    gender: z.boolean().optional(),
    phone: z.boolean().optional(),
    email: z.boolean().optional(),
    marital_status: z.boolean().optional(),
    address: z.boolean().optional(),
    emergency_contact_name: z.boolean().optional(),
    emergency_contact_number: z.boolean().optional(),
    relation: z.boolean().optional(),
    blood_group: z.boolean().optional(),
    allergies: z.boolean().optional(),
    medical_conditions: z.boolean().optional(),
    medical_history: z.boolean().optional(),
    insurance_provider: z.boolean().optional(),
    insurance_number: z.boolean().optional(),
    privacy_consent: z.boolean().optional(),
    service_consent: z.boolean().optional(),
    medical_consent: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
    medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
    ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const PatientUpdateArgsSchema: z.ZodType<Prisma.PatientUpdateArgs> = z
  .object({
    select: PatientSelectSchema.optional(),
    include: z.lazy(() => PatientIncludeSchema).optional(),
    data: z.union([PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema]),
    where: PatientWhereUniqueInputSchema,
  })
  .strict();

export default PatientUpdateArgsSchema;
