import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestUncheckedCreateNestedOneWithoutServicesInputSchema } from './LabTestUncheckedCreateNestedOneWithoutServicesInputSchema';

export const ServicesUncheckedCreateWithoutBillsInputSchema: z.ZodType<Prisma.ServicesUncheckedCreateWithoutBillsInput> =
  z
    .object({
      id: z.number().int().optional(),
      service_name: z.string(),
      description: z.string(),
      price: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      labtest: z.lazy(() => LabTestUncheckedCreateNestedOneWithoutServicesInputSchema).optional(),
    })
    .strict();

export default ServicesUncheckedCreateWithoutBillsInputSchema;
