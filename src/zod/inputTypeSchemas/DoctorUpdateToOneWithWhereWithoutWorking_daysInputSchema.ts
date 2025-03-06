import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorUncheckedUpdateWithoutWorking_daysInputSchema } from './DoctorUncheckedUpdateWithoutWorking_daysInputSchema';
import { DoctorUpdateWithoutWorking_daysInputSchema } from './DoctorUpdateWithoutWorking_daysInputSchema';
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema';

export const DoctorUpdateToOneWithWhereWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutWorking_daysInput> =
  z
    .object({
      where: z.lazy(() => DoctorWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => DoctorUpdateWithoutWorking_daysInputSchema),
        z.lazy(() => DoctorUncheckedUpdateWithoutWorking_daysInputSchema),
      ]),
    })
    .strict();

export default DoctorUpdateToOneWithWhereWithoutWorking_daysInputSchema;
