import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RatingUncheckedCreateWithoutPatientInputSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutPatientInput> =
  z
    .object({
      id: z.number().int().optional(),
      staff_id: z.string(),
      rating: z.number().int(),
      comment: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
    })
    .strict();

export default RatingUncheckedCreateWithoutPatientInputSchema;
