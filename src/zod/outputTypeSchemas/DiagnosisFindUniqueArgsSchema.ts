import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisIncludeSchema } from '../inputTypeSchemas/DiagnosisIncludeSchema';
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

export const DiagnosisFindUniqueArgsSchema: z.ZodType<Prisma.DiagnosisFindUniqueArgs> = z
  .object({
    select: DiagnosisSelectSchema.optional(),
    include: z.lazy(() => DiagnosisIncludeSchema).optional(),
    where: DiagnosisWhereUniqueInputSchema,
  })
  .strict();

export default DiagnosisFindUniqueArgsSchema;
