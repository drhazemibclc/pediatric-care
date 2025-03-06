import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentStatusSchema } from './AppointmentStatusSchema';
import { MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema';
import { PaymentUncheckedCreateNestedManyWithoutAppointmentInputSchema } from './PaymentUncheckedCreateNestedManyWithoutAppointmentInputSchema';

export const AppointmentUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      patient_id: z.string(),
      doctor_id: z.string(),
      appointment_date: z.coerce.date(),
      time: z.string(),
      status: z.lazy(() => AppointmentStatusSchema).optional(),
      type: z.string(),
      note: z.string().optional().nullable(),
      reason: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      bills: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
      medical: z
        .lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema)
        .optional(),
    })
    .strict();

export default AppointmentUncheckedCreateInputSchema;
