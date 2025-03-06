import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateWithoutLab_testInputSchema } from './MedicalRecordsCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedCreateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedCreateWithoutLab_testInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsCreateOrConnectWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutLab_testInput> =
  z
    .object({
      where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => MedicalRecordsCreateWithoutLab_testInputSchema),
        z.lazy(() => MedicalRecordsUncheckedCreateWithoutLab_testInputSchema),
      ]),
    })
    .strict();

export default MedicalRecordsCreateOrConnectWithoutLab_testInputSchema;
