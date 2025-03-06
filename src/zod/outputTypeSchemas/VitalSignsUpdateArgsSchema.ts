import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { VitalSignsIncludeSchema } from '../inputTypeSchemas/VitalSignsIncludeSchema';
import { VitalSignsUncheckedUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedUpdateInputSchema';
import { VitalSignsUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUpdateInputSchema';
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema';
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const VitalSignsUpdateArgsSchema: z.ZodType<Prisma.VitalSignsUpdateArgs> = z
  .object({
    select: VitalSignsSelectSchema.optional(),
    include: z.lazy(() => VitalSignsIncludeSchema).optional(),
    data: z.union([VitalSignsUpdateInputSchema, VitalSignsUncheckedUpdateInputSchema]),
    where: VitalSignsWhereUniqueInputSchema,
  })
  .strict();

export default VitalSignsUpdateArgsSchema;
