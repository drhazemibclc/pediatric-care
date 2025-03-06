import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MedicalRecordsIncludeSchema } from '../inputTypeSchemas/MedicalRecordsIncludeSchema';
import { MedicalRecordsOrderByWithRelationInputSchema } from '../inputTypeSchemas/MedicalRecordsOrderByWithRelationInputSchema';
import { MedicalRecordsScalarFieldEnumSchema } from '../inputTypeSchemas/MedicalRecordsScalarFieldEnumSchema';
import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema';
import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema';
import { AppointmentArgsSchema } from '../outputTypeSchemas/AppointmentArgsSchema';
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema';
import { LabTestFindManyArgsSchema } from '../outputTypeSchemas/LabTestFindManyArgsSchema';
import { MedicalRecordsCountOutputTypeArgsSchema } from '../outputTypeSchemas/MedicalRecordsCountOutputTypeArgsSchema';
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema';
import { VitalSignsFindManyArgsSchema } from '../outputTypeSchemas/VitalSignsFindManyArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MedicalRecordsSelectSchema: z.ZodType<Prisma.MedicalRecordsSelect> = z
  .object({
    id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    appointment_id: z.boolean().optional(),
    doctor_id: z.boolean().optional(),
    treatment_plan: z.boolean().optional(),
    prescriptions: z.boolean().optional(),
    lab_request: z.boolean().optional(),
    notes: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsSchema)]).optional(),
    patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
    lab_test: z.union([z.boolean(), z.lazy(() => LabTestFindManyArgsSchema)]).optional(),
    vital_signs: z.union([z.boolean(), z.lazy(() => VitalSignsFindManyArgsSchema)]).optional(),
    diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => MedicalRecordsCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const MedicalRecordsFindFirstArgsSchema: z.ZodType<Prisma.MedicalRecordsFindFirstArgs> = z
  .object({
    select: MedicalRecordsSelectSchema.optional(),
    include: z.lazy(() => MedicalRecordsIncludeSchema).optional(),
    where: MedicalRecordsWhereInputSchema.optional(),
    orderBy: z
      .union([
        MedicalRecordsOrderByWithRelationInputSchema.array(),
        MedicalRecordsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: MedicalRecordsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([MedicalRecordsScalarFieldEnumSchema, MedicalRecordsScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default MedicalRecordsFindFirstArgsSchema;
