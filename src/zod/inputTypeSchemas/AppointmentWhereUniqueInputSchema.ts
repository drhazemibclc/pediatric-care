import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentStatusSchema } from './AppointmentStatusSchema';
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema';
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema';
import { EnumAppointmentStatusFilterSchema } from './EnumAppointmentStatusFilterSchema';
import { MedicalRecordsListRelationFilterSchema } from './MedicalRecordsListRelationFilterSchema';
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { PaymentListRelationFilterSchema } from './PaymentListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AppointmentWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z
  .object({
    id: z.number().int(),
  })
  .and(
    z
      .object({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => AppointmentWhereInputSchema),
            z.lazy(() => AppointmentWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => AppointmentWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => AppointmentWhereInputSchema),
            z.lazy(() => AppointmentWhereInputSchema).array(),
          ])
          .optional(),
        patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        doctor_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        appointment_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        time: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z
          .union([
            z.lazy(() => EnumAppointmentStatusFilterSchema),
            z.lazy(() => AppointmentStatusSchema),
          ])
          .optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        note: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        reason: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        patient: z
          .union([
            z.lazy(() => PatientScalarRelationFilterSchema),
            z.lazy(() => PatientWhereInputSchema),
          ])
          .optional(),
        doctor: z
          .union([
            z.lazy(() => DoctorScalarRelationFilterSchema),
            z.lazy(() => DoctorWhereInputSchema),
          ])
          .optional(),
        bills: z.lazy(() => PaymentListRelationFilterSchema).optional(),
        medical: z.lazy(() => MedicalRecordsListRelationFilterSchema).optional(),
      })
      .strict(),
  );

export default AppointmentWhereUniqueInputSchema;
