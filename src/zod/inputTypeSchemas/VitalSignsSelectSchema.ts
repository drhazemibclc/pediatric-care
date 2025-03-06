import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema';

export const VitalSignsSelectSchema: z.ZodType<Prisma.VitalSignsSelect> = z
  .object({
    id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    medical_id: z.boolean().optional(),
    body_temperature: z.boolean().optional(),
    systolic: z.boolean().optional(),
    diastolic: z.boolean().optional(),
    heartRate: z.boolean().optional(),
    respiratory_rate: z.boolean().optional(),
    oxygen_saturation: z.boolean().optional(),
    weight: z.boolean().optional(),
    height: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
  })
  .strict();

export default VitalSignsSelectSchema;
