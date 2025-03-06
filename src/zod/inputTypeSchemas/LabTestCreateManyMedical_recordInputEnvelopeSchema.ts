import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateManyMedical_recordInputSchema } from './LabTestCreateManyMedical_recordInputSchema';

export const LabTestCreateManyMedical_recordInputEnvelopeSchema: z.ZodType<Prisma.LabTestCreateManyMedical_recordInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LabTestCreateManyMedical_recordInputSchema),
        z.lazy(() => LabTestCreateManyMedical_recordInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default LabTestCreateManyMedical_recordInputEnvelopeSchema;
