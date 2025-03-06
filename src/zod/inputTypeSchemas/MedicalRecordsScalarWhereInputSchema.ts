import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const MedicalRecordsScalarWhereInputSchema: z.ZodType<Prisma.MedicalRecordsScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => MedicalRecordsScalarWhereInputSchema),
          z.lazy(() => MedicalRecordsScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => MedicalRecordsScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => MedicalRecordsScalarWhereInputSchema),
          z.lazy(() => MedicalRecordsScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      appointment_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      doctor_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      treatment_plan: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      prescriptions: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      lab_request: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      notes: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    })
    .strict();

export default MedicalRecordsScalarWhereInputSchema;
