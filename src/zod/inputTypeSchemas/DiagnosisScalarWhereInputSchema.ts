import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const DiagnosisScalarWhereInputSchema: z.ZodType<Prisma.DiagnosisScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiagnosisScalarWhereInputSchema),
        z.lazy(() => DiagnosisScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiagnosisScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiagnosisScalarWhereInputSchema),
        z.lazy(() => DiagnosisScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    medical_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    doctor_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    symptoms: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    diagnosis: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    notes: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    prescribed_medications: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    follow_up_plan: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default DiagnosisScalarWhereInputSchema;
