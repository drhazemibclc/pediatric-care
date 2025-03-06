import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema';
import { ServicesOrderByWithRelationInputSchema } from './ServicesOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LabTestOrderByWithRelationInputSchema: z.ZodType<Prisma.LabTestOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      record_id: z.lazy(() => SortOrderSchema).optional(),
      test_date: z.lazy(() => SortOrderSchema).optional(),
      result: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      service_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      services: z.lazy(() => ServicesOrderByWithRelationInputSchema).optional(),
      medical_record: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default LabTestOrderByWithRelationInputSchema;
