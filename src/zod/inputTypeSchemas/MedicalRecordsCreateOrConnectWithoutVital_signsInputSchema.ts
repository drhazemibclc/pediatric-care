import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateWithoutVital_signsInputSchema } from './MedicalRecordsCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutVital_signsInput> =
  z
    .object({
      where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => MedicalRecordsCreateWithoutVital_signsInputSchema),
        z.lazy(() => MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema),
      ]),
    })
    .strict();

export default MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema;
