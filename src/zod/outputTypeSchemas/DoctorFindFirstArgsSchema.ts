import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorIncludeSchema } from '../inputTypeSchemas/DoctorIncludeSchema';
import { DoctorOrderByWithRelationInputSchema } from '../inputTypeSchemas/DoctorOrderByWithRelationInputSchema';
import { DoctorScalarFieldEnumSchema } from '../inputTypeSchemas/DoctorScalarFieldEnumSchema';
import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema';
import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema';
import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema';
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema';
import { DoctorCountOutputTypeArgsSchema } from '../outputTypeSchemas/DoctorCountOutputTypeArgsSchema';
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema';
import { WorkingDaysFindManyArgsSchema } from '../outputTypeSchemas/WorkingDaysFindManyArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorSelectSchema: z.ZodType<Prisma.DoctorSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    specialization: z.boolean().optional(),
    license_number: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    department: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    availability_status: z.boolean().optional(),
    type: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    working_days: z.union([z.boolean(), z.lazy(() => WorkingDaysFindManyArgsSchema)]).optional(),
    appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
    ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
    diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const DoctorFindFirstArgsSchema: z.ZodType<Prisma.DoctorFindFirstArgs> = z
  .object({
    select: DoctorSelectSchema.optional(),
    include: z.lazy(() => DoctorIncludeSchema).optional(),
    where: DoctorWhereInputSchema.optional(),
    orderBy: z
      .union([DoctorOrderByWithRelationInputSchema.array(), DoctorOrderByWithRelationInputSchema])
      .optional(),
    cursor: DoctorWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default DoctorFindFirstArgsSchema;
