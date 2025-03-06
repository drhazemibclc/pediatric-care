import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateOrConnectWithoutLab_testInputSchema } from './MedicalRecordsCreateOrConnectWithoutLab_testInputSchema';
import { MedicalRecordsCreateWithoutLab_testInputSchema } from './MedicalRecordsCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedCreateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedCreateWithoutLab_testInputSchema';
import { MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema';
import { MedicalRecordsUpdateToOneWithWhereWithoutLab_testInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutLab_testInputSchema';
import { MedicalRecordsUpdateWithoutLab_testInputSchema } from './MedicalRecordsUpdateWithoutLab_testInputSchema';
import { MedicalRecordsUpsertWithoutLab_testInputSchema } from './MedicalRecordsUpsertWithoutLab_testInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsUpdateOneRequiredWithoutLab_testNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutLab_testNestedInput> =
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
      upsert: z.lazy(() => MedicalRecordsUpsertWithoutLab_testInputSchema).optional(),
      connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutLab_testInputSchema),
          z.lazy(() => MedicalRecordsUpdateWithoutLab_testInputSchema),
          z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLab_testInputSchema),
        ])
        .optional(),
    })
    .strict();

export default MedicalRecordsUpdateOneRequiredWithoutLab_testNestedInputSchema;
