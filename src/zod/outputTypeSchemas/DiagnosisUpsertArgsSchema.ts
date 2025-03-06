import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisCreateInputSchema } from '../inputTypeSchemas/DiagnosisCreateInputSchema';
import { DiagnosisIncludeSchema } from '../inputTypeSchemas/DiagnosisIncludeSchema';
import { DiagnosisUncheckedCreateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedCreateInputSchema';
import { DiagnosisUncheckedUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedUpdateInputSchema';
import { DiagnosisUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUpdateInputSchema';
import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema';
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema';
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiagnosisSelectSchema: z.ZodType<Prisma.DiagnosisSelect> = z
  .object({
    id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    medical_id: z.boolean().optional(),
    doctor_id: z.boolean().optional(),
    symptoms: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    notes: z.boolean().optional(),
    prescribed_medications: z.boolean().optional(),
    follow_up_plan: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
    medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
  })
  .strict();

export const DiagnosisUpsertArgsSchema: z.ZodType<Prisma.DiagnosisUpsertArgs> = z
  .object({
    select: DiagnosisSelectSchema.optional(),
    include: z.lazy(() => DiagnosisIncludeSchema).optional(),
    where: DiagnosisWhereUniqueInputSchema,
    create: z.union([DiagnosisCreateInputSchema, DiagnosisUncheckedCreateInputSchema]),
    update: z.union([DiagnosisUpdateInputSchema, DiagnosisUncheckedUpdateInputSchema]),
  })
  .strict();

export default DiagnosisUpsertArgsSchema;
