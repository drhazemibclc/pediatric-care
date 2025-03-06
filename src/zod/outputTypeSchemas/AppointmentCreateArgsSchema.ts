import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateInputSchema } from '../inputTypeSchemas/AppointmentCreateInputSchema';
import { AppointmentIncludeSchema } from '../inputTypeSchemas/AppointmentIncludeSchema';
import { AppointmentUncheckedCreateInputSchema } from '../inputTypeSchemas/AppointmentUncheckedCreateInputSchema';
import { AppointmentCountOutputTypeArgsSchema } from '../outputTypeSchemas/AppointmentCountOutputTypeArgsSchema';
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema';
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema';
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema';
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppointmentSelectSchema: z.ZodType<Prisma.AppointmentSelect> = z
  .object({
    id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    doctor_id: z.boolean().optional(),
    appointment_date: z.boolean().optional(),
    time: z.boolean().optional(),
    status: z.boolean().optional(),
    type: z.boolean().optional(),
    note: z.boolean().optional(),
    reason: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
    doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
    bills: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
    medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const AppointmentCreateArgsSchema: z.ZodType<Prisma.AppointmentCreateArgs> = z
  .object({
    select: AppointmentSelectSchema.optional(),
    include: z.lazy(() => AppointmentIncludeSchema).optional(),
    data: z.union([AppointmentCreateInputSchema, AppointmentUncheckedCreateInputSchema]),
  })
  .strict();

export default AppointmentCreateArgsSchema;
