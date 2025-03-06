import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateManyMedical_recordInputEnvelopeSchema } from './LabTestCreateManyMedical_recordInputEnvelopeSchema';
import { LabTestCreateOrConnectWithoutMedical_recordInputSchema } from './LabTestCreateOrConnectWithoutMedical_recordInputSchema';
import { LabTestCreateWithoutMedical_recordInputSchema } from './LabTestCreateWithoutMedical_recordInputSchema';
import { LabTestScalarWhereInputSchema } from './LabTestScalarWhereInputSchema';
import { LabTestUncheckedCreateWithoutMedical_recordInputSchema } from './LabTestUncheckedCreateWithoutMedical_recordInputSchema';
import { LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema } from './LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema';
import { LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema } from './LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema';
import { LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema } from './LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestUncheckedUpdateManyWithoutMedical_recordNestedInputSchema: z.ZodType<Prisma.LabTestUncheckedUpdateManyWithoutMedical_recordNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedical_recordInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LabTestCreateManyMedical_recordInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => LabTestWhereUniqueInputSchema),
          z.lazy(() => LabTestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LabTestWhereUniqueInputSchema),
          z.lazy(() => LabTestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LabTestWhereUniqueInputSchema),
          z.lazy(() => LabTestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LabTestWhereUniqueInputSchema),
          z.lazy(() => LabTestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedical_recordInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema),
          z.lazy(() => LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LabTestScalarWhereInputSchema),
          z.lazy(() => LabTestScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default LabTestUncheckedUpdateManyWithoutMedical_recordNestedInputSchema;
