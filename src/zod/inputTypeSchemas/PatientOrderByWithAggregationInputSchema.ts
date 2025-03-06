import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientCountOrderByAggregateInputSchema } from './PatientCountOrderByAggregateInputSchema';
import { PatientMaxOrderByAggregateInputSchema } from './PatientMaxOrderByAggregateInputSchema';
import { PatientMinOrderByAggregateInputSchema } from './PatientMinOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      first_name: z.lazy(() => SortOrderSchema).optional(),
      last_name: z.lazy(() => SortOrderSchema).optional(),
      date_of_birth: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      marital_status: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => SortOrderSchema).optional(),
      emergency_contact_name: z.lazy(() => SortOrderSchema).optional(),
      emergency_contact_number: z.lazy(() => SortOrderSchema).optional(),
      relation: z.lazy(() => SortOrderSchema).optional(),
      blood_group: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      allergies: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      medical_conditions: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      medical_history: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      insurance_provider: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      insurance_number: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      privacy_consent: z.lazy(() => SortOrderSchema).optional(),
      service_consent: z.lazy(() => SortOrderSchema).optional(),
      medical_consent: z.lazy(() => SortOrderSchema).optional(),
      img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      colorCode: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => PatientCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PatientMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PatientMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default PatientOrderByWithAggregationInputSchema;
