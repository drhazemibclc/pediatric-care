import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateOrConnectWithoutLab_testInputSchema } from './MedicalRecordsCreateOrConnectWithoutLab_testInputSchema';
import { MedicalRecordsCreateWithoutLab_testInputSchema } from './MedicalRecordsCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedCreateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedCreateWithoutLab_testInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsCreateNestedOneWithoutLab_testInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutLab_testInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalRecordsCreateWithoutLab_testInputSchema),
          z.lazy(() => MedicalRecordsUncheckedCreateWithoutLab_testInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MedicalRecordsCreateOrConnectWithoutLab_testInputSchema)
        .optional(),
      connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsCreateNestedOneWithoutLab_testInputSchema;
