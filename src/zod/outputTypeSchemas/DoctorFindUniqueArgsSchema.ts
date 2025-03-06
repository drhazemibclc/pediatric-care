import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorIncludeSchema } from '../inputTypeSchemas/DoctorIncludeSchema';
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

export const DoctorFindUniqueArgsSchema: z.ZodType<Prisma.DoctorFindUniqueArgs> = z
  .object({
    select: DoctorSelectSchema.optional(),
    include: z.lazy(() => DoctorIncludeSchema).optional(),
    where: DoctorWhereUniqueInputSchema,
  })
  .strict();

export default DoctorFindUniqueArgsSchema;
