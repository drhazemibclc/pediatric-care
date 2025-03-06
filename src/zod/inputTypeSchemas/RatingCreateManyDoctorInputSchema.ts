import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RatingCreateManyDoctorInputSchema: z.ZodType<Prisma.RatingCreateManyDoctorInput> = z
  .object({
    id: z.number().int().optional(),
    patient_id: z.string(),
    rating: z.number().int(),
    comment: z.string().optional().nullable(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export default RatingCreateManyDoctorInputSchema;
