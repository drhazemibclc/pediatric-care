import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const MedicalRecordsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MedicalRecordsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      patient_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      appointment_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      doctor_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      treatment_plan: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      prescriptions: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      lab_request: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      notes: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      created_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      updated_at: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default MedicalRecordsScalarWhereWithAggregatesInputSchema;
