import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema';
import { MedicalRecordsOrderByRelationAggregateInputSchema } from './MedicalRecordsOrderByRelationAggregateInputSchema';
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema';
import { PaymentOrderByRelationAggregateInputSchema } from './PaymentOrderByRelationAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AppointmentOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_date: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      reason: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
      doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
      bills: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
      medical: z.lazy(() => MedicalRecordsOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default AppointmentOrderByWithRelationInputSchema;
