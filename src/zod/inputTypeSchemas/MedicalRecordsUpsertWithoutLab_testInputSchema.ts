import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateWithoutLab_testInputSchema } from './MedicalRecordsCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedCreateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema';
import { MedicalRecordsUpdateWithoutLab_testInputSchema } from './MedicalRecordsUpdateWithoutLab_testInputSchema';
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema';

export const MedicalRecordsUpsertWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutLab_testInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => MedicalRecordsUpdateWithoutLab_testInputSchema),
        z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema),
      ]),
      create: z.union([
        z.lazy(() => MedicalRecordsCreateWithoutLab_testInputSchema),
        z.lazy(() => MedicalRecordsUncheckedCreateWithoutLab_testInputSchema),
      ]),
      where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsUpsertWithoutLab_testInputSchema;
