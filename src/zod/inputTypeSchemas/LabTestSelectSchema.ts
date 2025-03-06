import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema';
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema';

export const LabTestSelectSchema: z.ZodType<Prisma.LabTestSelect> = z
  .object({
    id: z.boolean().optional(),
    record_id: z.boolean().optional(),
    test_date: z.boolean().optional(),
    result: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    service_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    services: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
    medical_record: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
  })
  .strict();

export default LabTestSelectSchema;
