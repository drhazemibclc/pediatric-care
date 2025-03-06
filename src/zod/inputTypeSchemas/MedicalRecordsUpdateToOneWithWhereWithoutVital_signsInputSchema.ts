import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsUpdateWithoutVital_signsInputSchema } from './MedicalRecordsUpdateWithoutVital_signsInputSchema';
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema';

export const MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInput> =
  z
    .object({
      where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => MedicalRecordsUpdateWithoutVital_signsInputSchema),
        z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVital_signsInputSchema),
      ]),
    })
    .strict();

export default MedicalRecordsUpdateToOneWithWhereWithoutVital_signsInputSchema;
