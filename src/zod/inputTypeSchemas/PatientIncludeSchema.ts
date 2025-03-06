import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema';
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema';
import { PatientCountOutputTypeArgsSchema } from '../outputTypeSchemas/PatientCountOutputTypeArgsSchema';
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema';
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema';

export const PatientIncludeSchema: z.ZodType<Prisma.PatientInclude> = z
  .object({
    appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
    medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
    ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default PatientIncludeSchema;
