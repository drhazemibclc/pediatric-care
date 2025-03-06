import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientBillsCreateNestedManyWithoutServiceInputSchema } from './PatientBillsCreateNestedManyWithoutServiceInputSchema';

export const ServicesCreateWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesCreateWithoutLabtestInput> =
  z
    .object({
      service_name: z.string(),
      description: z.string(),
      price: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      bills: z.lazy(() => PatientBillsCreateNestedManyWithoutServiceInputSchema).optional(),
    })
    .strict();

export default ServicesCreateWithoutLabtestInputSchema;
