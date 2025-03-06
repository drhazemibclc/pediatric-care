import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateWithoutMedical_recordInputSchema } from './LabTestCreateWithoutMedical_recordInputSchema';
import { LabTestUncheckedCreateWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateWithoutMedical_recordInputSchema';
import { LabTestUncheckedUpdateWithoutMedical_recordInputSchema } from './LabTestUncheckedUpdateWithoutMedical_recordInputSchema';
import { LabTestUpdateWithoutMedical_recordInputSchema } from './LabTestUpdateWithoutMedical_recordInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutMedical_recordInput> =
  z
    .object({
      where: z.lazy(() => LabTestWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LabTestUpdateWithoutMedical_recordInputSchema),
        z.lazy(() => LabTestUncheckedUpdateWithoutMedical_recordInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LabTestCreateWithoutMedical_recordInputSchema),
        z.lazy(() => LabTestUncheckedCreateWithoutMedical_recordInputSchema),
      ]),
    })
    .strict();

export default LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema;
