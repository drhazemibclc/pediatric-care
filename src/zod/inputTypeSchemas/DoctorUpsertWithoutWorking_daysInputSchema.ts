import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateWithoutWorking_daysInputSchema } from './DoctorCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedCreateWithoutWorking_daysInputSchema } from './DoctorUncheckedCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedUpdateWithoutWorking_daysInputSchema } from './DoctorUncheckedUpdateWithoutWorking_daysInputSchema';
import { DoctorUpdateWithoutWorking_daysInputSchema } from './DoctorUpdateWithoutWorking_daysInputSchema';
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema';

export const DoctorUpsertWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutWorking_daysInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => DoctorUpdateWithoutWorking_daysInputSchema),
        z.lazy(() => DoctorUncheckedUpdateWithoutWorking_daysInputSchema),
      ]),
      create: z.union([
        z.lazy(() => DoctorCreateWithoutWorking_daysInputSchema),
        z.lazy(() => DoctorUncheckedCreateWithoutWorking_daysInputSchema),
      ]),
      where: z.lazy(() => DoctorWhereInputSchema).optional(),
    })
    .strict();

export default DoctorUpsertWithoutWorking_daysInputSchema;
