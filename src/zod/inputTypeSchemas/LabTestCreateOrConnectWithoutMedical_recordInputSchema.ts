import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateWithoutMedical_recordInputSchema } from './LabTestCreateWithoutMedical_recordInputSchema';
import { LabTestUncheckedCreateWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateWithoutMedical_recordInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestCreateOrConnectWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestCreateOrConnectWithoutMedical_recordInput> =
  z
    .object({
      where: z.lazy(() => LabTestWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LabTestCreateWithoutMedical_recordInputSchema),
        z.lazy(() => LabTestUncheckedCreateWithoutMedical_recordInputSchema),
      ]),
    })
    .strict();

export default LabTestCreateOrConnectWithoutMedical_recordInputSchema;
