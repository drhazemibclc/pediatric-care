import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestUncheckedUpdateWithoutMedical_recordInputSchema } from './LabTestUncheckedUpdateWithoutMedical_recordInputSchema';
import { LabTestUpdateWithoutMedical_recordInputSchema } from './LabTestUpdateWithoutMedical_recordInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutMedical_recordInput> =
  z
    .object({
      where: z.lazy(() => LabTestWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LabTestUpdateWithoutMedical_recordInputSchema),
        z.lazy(() => LabTestUncheckedUpdateWithoutMedical_recordInputSchema),
      ]),
    })
    .strict();

export default LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema;
