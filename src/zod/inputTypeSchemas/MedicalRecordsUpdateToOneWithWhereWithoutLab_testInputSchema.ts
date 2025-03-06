import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema';
import { MedicalRecordsUpdateWithoutLab_testInputSchema } from './MedicalRecordsUpdateWithoutLab_testInputSchema';
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema';

export const MedicalRecordsUpdateToOneWithWhereWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutLab_testInput> =
  z
    .object({
      where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => MedicalRecordsUpdateWithoutLab_testInputSchema),
        z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema),
      ]),
    })
    .strict();

export default MedicalRecordsUpdateToOneWithWhereWithoutLab_testInputSchema;
