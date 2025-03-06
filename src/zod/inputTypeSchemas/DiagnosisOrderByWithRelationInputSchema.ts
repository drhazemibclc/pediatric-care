import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema';
import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DiagnosisOrderByWithRelationInputSchema: z.ZodType<Prisma.DiagnosisOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      doctor_id: z.lazy(() => SortOrderSchema).optional(),
      symptoms: z.lazy(() => SortOrderSchema).optional(),
      diagnosis: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      prescribed_medications: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      follow_up_plan: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
      medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default DiagnosisOrderByWithRelationInputSchema;
