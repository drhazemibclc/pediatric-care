import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema';

export const ServicesUncheckedCreateWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUncheckedCreateWithoutLabtestInput> =
  z
    .object({
      id: z.number().int().optional(),
      service_name: z.string(),
      description: z.string(),
      price: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      bills: z
        .lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema)
        .optional(),
    })
    .strict();

export default ServicesUncheckedCreateWithoutLabtestInputSchema;
