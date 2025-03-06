import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCreateOrConnectWithoutWorking_daysInputSchema } from './DoctorCreateOrConnectWithoutWorking_daysInputSchema';
import { DoctorCreateWithoutWorking_daysInputSchema } from './DoctorCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedCreateWithoutWorking_daysInputSchema } from './DoctorUncheckedCreateWithoutWorking_daysInputSchema';
import { DoctorUncheckedUpdateWithoutWorking_daysInputSchema } from './DoctorUncheckedUpdateWithoutWorking_daysInputSchema';
import { DoctorUpdateToOneWithWhereWithoutWorking_daysInputSchema } from './DoctorUpdateToOneWithWhereWithoutWorking_daysInputSchema';
import { DoctorUpdateWithoutWorking_daysInputSchema } from './DoctorUpdateWithoutWorking_daysInputSchema';
import { DoctorUpsertWithoutWorking_daysInputSchema } from './DoctorUpsertWithoutWorking_daysInputSchema';
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema';

export const DoctorUpdateOneRequiredWithoutWorking_daysNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutWorking_daysNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DoctorCreateWithoutWorking_daysInputSchema),
          z.lazy(() => DoctorUncheckedCreateWithoutWorking_daysInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorking_daysInputSchema).optional(),
      upsert: z.lazy(() => DoctorUpsertWithoutWorking_daysInputSchema).optional(),
      connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => DoctorUpdateToOneWithWhereWithoutWorking_daysInputSchema),
          z.lazy(() => DoctorUpdateWithoutWorking_daysInputSchema),
          z.lazy(() => DoctorUncheckedUpdateWithoutWorking_daysInputSchema),
        ])
        .optional(),
    })
    .strict();

export default DoctorUpdateOneRequiredWithoutWorking_daysNestedInputSchema;
