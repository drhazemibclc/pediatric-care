import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DoctorCountOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      specialization: z.lazy(() => SortOrderSchema).optional(),
      license_number: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => SortOrderSchema).optional(),
      department: z.lazy(() => SortOrderSchema).optional(),
      img: z.lazy(() => SortOrderSchema).optional(),
      colorCode: z.lazy(() => SortOrderSchema).optional(),
      availability_status: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default DoctorCountOrderByAggregateInputSchema;
