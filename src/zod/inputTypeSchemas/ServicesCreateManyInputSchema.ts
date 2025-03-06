import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ServicesCreateManyInputSchema: z.ZodType<Prisma.ServicesCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    service_name: z.string(),
    description: z.string(),
    price: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export default ServicesCreateManyInputSchema;
