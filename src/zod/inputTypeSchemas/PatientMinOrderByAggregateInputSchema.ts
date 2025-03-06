import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientMinOrderByAggregateInputSchema: z.ZodType<Prisma.PatientMinOrderByAggregateInput> =
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
      blood_group: z.lazy(() => SortOrderSchema).optional(),
      allergies: z.lazy(() => SortOrderSchema).optional(),
      medical_conditions: z.lazy(() => SortOrderSchema).optional(),
      medical_history: z.lazy(() => SortOrderSchema).optional(),
      insurance_provider: z.lazy(() => SortOrderSchema).optional(),
      insurance_number: z.lazy(() => SortOrderSchema).optional(),
      privacy_consent: z.lazy(() => SortOrderSchema).optional(),
      service_consent: z.lazy(() => SortOrderSchema).optional(),
      medical_consent: z.lazy(() => SortOrderSchema).optional(),
      img: z.lazy(() => SortOrderSchema).optional(),
      colorCode: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PatientMinOrderByAggregateInputSchema;
