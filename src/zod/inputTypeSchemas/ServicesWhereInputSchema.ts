import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { LabTestNullableScalarRelationFilterSchema } from './LabTestNullableScalarRelationFilterSchema';
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema';
import { PatientBillsListRelationFilterSchema } from './PatientBillsListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const ServicesWhereInputSchema: z.ZodType<Prisma.ServicesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServicesWhereInputSchema),
        z.lazy(() => ServicesWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServicesWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServicesWhereInputSchema),
        z.lazy(() => ServicesWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    service_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    price: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    labtest: z
      .union([
        z.lazy(() => LabTestNullableScalarRelationFilterSchema),
        z.lazy(() => LabTestWhereInputSchema),
      ])
      .optional()
      .nullable(),
    bills: z.lazy(() => PatientBillsListRelationFilterSchema).optional(),
  })
  .strict();

export default ServicesWhereInputSchema;
