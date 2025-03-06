import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateWithoutVital_signsInputSchema } from './MedicalRecordsCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema';

export const MedicalRecordsUpsertWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutVital_signsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => MedicalRecordsUpdateWithoutVital_signsInputSchema),
        z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => MedicalRecordsCreateWithoutVital_signsInputSchema),
        z.lazy(() => MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema),
      ]),
      where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsUpsertWithoutVital_signsInputSchema;
