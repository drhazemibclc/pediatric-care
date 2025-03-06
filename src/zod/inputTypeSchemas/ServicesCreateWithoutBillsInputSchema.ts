import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateNestedOneWithoutServicesInputSchema } from './LabTestCreateNestedOneWithoutServicesInputSchema';

export const ServicesCreateWithoutBillsInputSchema: z.ZodType<Prisma.ServicesCreateWithoutBillsInput> =
  z
    .object({
      service_name: z.string(),
      description: z.string(),
      price: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      labtest: z.lazy(() => LabTestCreateNestedOneWithoutServicesInputSchema).optional(),
    })
    .strict();

export default ServicesCreateWithoutBillsInputSchema;
