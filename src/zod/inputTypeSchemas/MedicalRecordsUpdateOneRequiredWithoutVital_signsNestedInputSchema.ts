import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema } from './MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema';
import { MedicalRecordsCreateWithoutVital_signsInputSchema } from './MedicalRecordsCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInputSchema';
import { MedicalRecordsUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsUpsertWithoutVital_signsInputSchema } from './MedicalRecordsUpsertWithoutVital_signsInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsUpdateOneRequiredWithoutVital_signsNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutVital_signsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalRecordsCreateWithoutVital_signsInputSchema),
          z.lazy(() => MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema)
        .optional(),
      upsert: z.lazy(() => MedicalRecordsUpsertWithoutVital_signsInputSchema).optional(),
      connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInputSchema),
          z.lazy(() => MedicalRecordsUpdateWithoutVital_signsInputSchema),
          z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default MedicalRecordsUpdateOneRequiredWithoutVital_signsNestedInputSchema;
