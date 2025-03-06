import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RatingIncludeSchema } from '../inputTypeSchemas/RatingIncludeSchema';
import { RatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/RatingOrderByWithRelationInputSchema';
import { RatingScalarFieldEnumSchema } from '../inputTypeSchemas/RatingScalarFieldEnumSchema';
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema';
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

export const RatingFindManyArgsSchema: z.ZodType<Prisma.RatingFindManyArgs> = z
  .object({
    select: RatingSelectSchema.optional(),
    include: z.lazy(() => RatingIncludeSchema).optional(),
    where: RatingWhereInputSchema.optional(),
    orderBy: z
      .union([RatingOrderByWithRelationInputSchema.array(), RatingOrderByWithRelationInputSchema])
      .optional(),
    cursor: RatingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([RatingScalarFieldEnumSchema, RatingScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default RatingFindManyArgsSchema;
