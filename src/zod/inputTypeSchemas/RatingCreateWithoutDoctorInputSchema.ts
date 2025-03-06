import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PatientCreateNestedOneWithoutRatingsInputSchema } from './PatientCreateNestedOneWithoutRatingsInputSchema';

export const RatingCreateWithoutDoctorInputSchema: z.ZodType<Prisma.RatingCreateWithoutDoctorInput> =
  z
    .object({
      rating: z.number().int(),
      comment: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      patient: z.lazy(() => PatientCreateNestedOneWithoutRatingsInputSchema),
    })
    .strict();

export default RatingCreateWithoutDoctorInputSchema;
