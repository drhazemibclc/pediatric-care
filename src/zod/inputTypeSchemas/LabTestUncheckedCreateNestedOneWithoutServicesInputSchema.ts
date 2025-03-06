import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateOrConnectWithoutServicesInputSchema } from './LabTestCreateOrConnectWithoutServicesInputSchema';
import { LabTestCreateWithoutServicesInputSchema } from './LabTestCreateWithoutServicesInputSchema';
import { LabTestUncheckedCreateWithoutServicesInputSchema } from './LabTestUncheckedCreateWithoutServicesInputSchema';
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema';

export const LabTestUncheckedCreateNestedOneWithoutServicesInputSchema: z.ZodType<Prisma.LabTestUncheckedCreateNestedOneWithoutServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LabTestCreateWithoutServicesInputSchema),
          z.lazy(() => LabTestUncheckedCreateWithoutServicesInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => LabTestCreateOrConnectWithoutServicesInputSchema).optional(),
      connect: z.lazy(() => LabTestWhereUniqueInputSchema).optional(),
    })
    .strict();

export default LabTestUncheckedCreateNestedOneWithoutServicesInputSchema;
