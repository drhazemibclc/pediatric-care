import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestScalarWhereInputSchema } from './LabTestScalarWhereInputSchema';
import { LabTestUncheckedUpdateManyWithoutMedical_recordInputSchema } from './LabTestUncheckedUpdateManyWithoutMedical_recordInputSchema';
import { LabTestUpdateManyMutationInputSchema } from './LabTestUpdateManyMutationInputSchema';

export const LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema: z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutMedical_recordInput> =
  z
    .object({
      where: z.lazy(() => LabTestScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LabTestUpdateManyMutationInputSchema),
        z.lazy(() => LabTestUncheckedUpdateManyWithoutMedical_recordInputSchema),
      ]),
    })
    .strict();

export default LabTestUpdateManyWithWhereWithoutMedical_recordInputSchema;
