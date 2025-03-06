import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const VitalSignsScalarWhereInputSchema: z.ZodType<Prisma.VitalSignsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VitalSignsScalarWhereInputSchema),
        z.lazy(() => VitalSignsScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VitalSignsScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VitalSignsScalarWhereInputSchema),
        z.lazy(() => VitalSignsScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    patient_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    medical_id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    body_temperature: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    systolic: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    diastolic: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    heartRate: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    respiratory_rate: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    oxygen_saturation: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    weight: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    height: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  })
  .strict();

export default VitalSignsScalarWhereInputSchema;
