import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateManyMedical_recordInputEnvelopeSchema } from './LabTestCreateManyMedical_recordInputEnvelopeSchema';
import { LabTestCreateOrConnectWithoutMedical_recordInputSchema } from './LabTestCreateOrConnectWithoutMedical_recordInputSchema';
import { LabTestCreateWithoutMedical_recordInputSchema } from './LabTestCreateWithoutMedical_recordInputSchema';
import { LabTestUncheckedCreateWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateWithoutMedical_recordInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestUncheckedCreateNestedManyWithoutMedical_recordInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LabTestCreateWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestCreateWithoutMedical_recordInputSchema).array(),
          z.lazy(() => LabTestUncheckedCreateWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestUncheckedCreateWithoutMedical_recordInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LabTestCreateOrConnectWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestCreateOrConnectWithoutMedical_recordInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LabTestCreateManyMedical_recordInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => LabTestWhereUniqueInputSchema),
          z.lazy(() => LabTestWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default LabTestUncheckedCreateNestedManyWithoutMedical_recordInputSchema;
