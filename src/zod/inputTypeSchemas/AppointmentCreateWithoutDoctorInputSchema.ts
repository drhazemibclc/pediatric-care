import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentStatusSchema } from './AppointmentStatusSchema';
import { MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema';
import { PatientCreateNestedOneWithoutAppointmentsInputSchema } from './PatientCreateNestedOneWithoutAppointmentsInputSchema';
import { PaymentCreateNestedManyWithoutAppointmentInputSchema } from './PaymentCreateNestedManyWithoutAppointmentInputSchema';

export const AppointmentCreateWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutDoctorInput> =
  z
    .object({
      appointment_date: z.coerce.date(),
      time: z.string(),
      status: z.lazy(() => AppointmentStatusSchema).optional(),
      type: z.string(),
      note: z.string().optional().nullable(),
      reason: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema),
      bills: z.lazy(() => PaymentCreateNestedManyWithoutAppointmentInputSchema).optional(),
      medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema).optional(),
    })
    .strict();

export default AppointmentCreateWithoutDoctorInputSchema;
