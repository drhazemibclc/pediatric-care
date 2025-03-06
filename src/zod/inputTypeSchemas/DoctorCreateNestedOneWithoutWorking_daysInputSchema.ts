import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateOrConnectWithoutWorking_daysInputSchema } from './DoctorCreateOrConnectWithoutWorking_daysInputSchema';
import { DoctorCreateWithoutWorking_daysInputSchema } from './DoctorCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedCreateWithoutWorking_daysInputSchema } from './DoctorUncheckedCreateWithoutWorking_daysInputSchema';
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema';

export const DoctorCreateNestedOneWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutWorking_daysInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DoctorCreateWithoutWorking_daysInputSchema),
          z.lazy(() => DoctorUncheckedCreateWithoutWorking_daysInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorking_daysInputSchema).optional(),
      connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
    })
    .strict();

export default DoctorCreateNestedOneWithoutWorking_daysInputSchema;
