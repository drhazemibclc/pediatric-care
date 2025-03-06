import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentOrderByWithRelationInputSchema } from './AppointmentOrderByWithRelationInputSchema';
import { DiagnosisOrderByRelationAggregateInputSchema } from './DiagnosisOrderByRelationAggregateInputSchema';
import { LabTestOrderByRelationAggregateInputSchema } from './LabTestOrderByRelationAggregateInputSchema';
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { VitalSignsOrderByRelationAggregateInputSchema } from './VitalSignsOrderByRelationAggregateInputSchema';

export const MedicalRecordsOrderByWithRelationInputSchema: z.ZodType<Prisma.MedicalRecordsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      appointment_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      treatment_plan: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      prescriptions: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      lab_request: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
      patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
      lab_test: z.lazy(() => LabTestOrderByRelationAggregateInputSchema).optional(),
      vital_signs: z.lazy(() => VitalSignsOrderByRelationAggregateInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsOrderByWithRelationInputSchema;
