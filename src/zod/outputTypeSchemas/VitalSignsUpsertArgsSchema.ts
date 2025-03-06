import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { VitalSignsCreateInputSchema } from '../inputTypeSchemas/VitalSignsCreateInputSchema';
import { VitalSignsIncludeSchema } from '../inputTypeSchemas/VitalSignsIncludeSchema';
import { VitalSignsUncheckedCreateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedCreateInputSchema';
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

export const VitalSignsUpsertArgsSchema: z.ZodType<Prisma.VitalSignsUpsertArgs> = z
  .object({
    select: VitalSignsSelectSchema.optional(),
    include: z.lazy(() => VitalSignsIncludeSchema).optional(),
    where: VitalSignsWhereUniqueInputSchema,
    create: z.union([VitalSignsCreateInputSchema, VitalSignsUncheckedCreateInputSchema]),
    update: z.union([VitalSignsUpdateInputSchema, VitalSignsUncheckedUpdateInputSchema]),
  })
  .strict();

export default VitalSignsUpsertArgsSchema;
