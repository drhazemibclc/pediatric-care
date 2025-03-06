import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema } from './MedicalRecordsCreateOrConnectWithoutVital_signsInputSchema';
import { MedicalRecordsCreateWithoutVital_signsInputSchema } from './MedicalRecordsCreateWithoutVital_signsInputSchema';
import { MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVital_signsInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema';

export const MedicalRecordsCreateNestedOneWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutVital_signsInput> =
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
      connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
    })
    .strict();

export default MedicalRecordsCreateNestedOneWithoutVital_signsInputSchema;
