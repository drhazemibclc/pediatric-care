import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema';
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema';
import { DoctorCountOutputTypeArgsSchema } from '../outputTypeSchemas/DoctorCountOutputTypeArgsSchema';
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema';
import { WorkingDaysFindManyArgsSchema } from '../outputTypeSchemas/WorkingDaysFindManyArgsSchema';

export const DoctorIncludeSchema: z.ZodType<Prisma.DoctorInclude> = z
  .object({
    working_days: z.union([z.boolean(), z.lazy(() => WorkingDaysFindManyArgsSchema)]).optional(),
    appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
    ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
    diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default DoctorIncludeSchema;
