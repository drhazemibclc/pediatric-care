import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PatientBillsUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUncheckedCreateWithoutServiceInput> =
  z
    .object({
      id: z.number().int().optional(),
      bill_id: z.number().int(),
      service_date: z.coerce.date(),
      quantity: z.number().int(),
      unit_cost: z.number(),
      total_cost: z.number(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default PatientBillsUncheckedCreateWithoutServiceInputSchema;
