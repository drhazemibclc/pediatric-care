import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateInputSchema } from '../inputTypeSchemas/DoctorCreateInputSchema';
import { DoctorIncludeSchema } from '../inputTypeSchemas/DoctorIncludeSchema';
import { DoctorUncheckedCreateInputSchema } from '../inputTypeSchemas/DoctorUncheckedCreateInputSchema';
import { DoctorUncheckedUpdateInputSchema } from '../inputTypeSchemas/DoctorUncheckedUpdateInputSchema';
import { DoctorUpdateInputSchema } from '../inputTypeSchemas/DoctorUpdateInputSchema';
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

export const DoctorUpsertArgsSchema: z.ZodType<Prisma.DoctorUpsertArgs> = z
  .object({
    select: DoctorSelectSchema.optional(),
    include: z.lazy(() => DoctorIncludeSchema).optional(),
    where: DoctorWhereUniqueInputSchema,
    create: z.union([DoctorCreateInputSchema, DoctorUncheckedCreateInputSchema]),
    update: z.union([DoctorUpdateInputSchema, DoctorUncheckedUpdateInputSchema]),
  })
  .strict();

export default DoctorUpsertArgsSchema;
