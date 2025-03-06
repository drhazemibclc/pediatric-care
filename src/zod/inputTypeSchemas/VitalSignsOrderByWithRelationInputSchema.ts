import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const VitalSignsOrderByWithRelationInputSchema: z.ZodType<Prisma.VitalSignsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      patient_id: z.lazy(() => SortOrderSchema).optional(),
      medical_id: z.lazy(() => SortOrderSchema).optional(),
      body_temperature: z.lazy(() => SortOrderSchema).optional(),
      systolic: z.lazy(() => SortOrderSchema).optional(),
      diastolic: z.lazy(() => SortOrderSchema).optional(),
      heartRate: z.lazy(() => SortOrderSchema).optional(),
      respiratory_rate: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      oxygen_saturation: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      weight: z.lazy(() => SortOrderSchema).optional(),
      height: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default VitalSignsOrderByWithRelationInputSchema;
