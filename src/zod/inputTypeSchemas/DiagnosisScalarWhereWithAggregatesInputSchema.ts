import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const DiagnosisScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiagnosisScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema),
          z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema),
          z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      patient_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      medical_id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      doctor_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      symptoms: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      diagnosis: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      notes: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      prescribed_medications: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      follow_up_plan: z
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

export default DiagnosisScalarWhereWithAggregatesInputSchema;
