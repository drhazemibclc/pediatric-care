import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateWithoutWorking_daysInputSchema } from './DoctorCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedCreateWithoutWorking_daysInputSchema } from './DoctorUncheckedCreateWithoutWorking_daysInputSchema';
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema';

export const DoctorCreateOrConnectWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutWorking_daysInput> =
  z
    .object({
      where: z.lazy(() => DoctorWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => DoctorCreateWithoutWorking_daysInputSchema),
        z.lazy(() => DoctorUncheckedCreateWithoutWorking_daysInputSchema),
      ]),
    })
    .strict();

export default DoctorCreateOrConnectWithoutWorking_daysInputSchema;
