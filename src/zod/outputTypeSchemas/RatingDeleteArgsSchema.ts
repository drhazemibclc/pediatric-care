import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RatingIncludeSchema } from '../inputTypeSchemas/RatingIncludeSchema';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema';
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema';
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RatingSelectSchema: z.ZodType<Prisma.RatingSelect> = z
  .object({
    id: z.boolean().optional(),
    staff_id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    rating: z.boolean().optional(),
    comment: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
    patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
  })
  .strict();

export const RatingDeleteArgsSchema: z.ZodType<Prisma.RatingDeleteArgs> = z
  .object({
    select: RatingSelectSchema.optional(),
    include: z.lazy(() => RatingIncludeSchema).optional(),
    where: RatingWhereUniqueInputSchema,
  })
  .strict();

export default RatingDeleteArgsSchema;
