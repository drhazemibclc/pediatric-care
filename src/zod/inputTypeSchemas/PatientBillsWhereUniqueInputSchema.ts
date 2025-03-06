import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PatientBillsWhereInputSchema } from './PatientBillsWhereInputSchema';
import { PaymentScalarRelationFilterSchema } from './PaymentScalarRelationFilterSchema';
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema';
import { ServicesScalarRelationFilterSchema } from './ServicesScalarRelationFilterSchema';
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema';

export const PatientBillsWhereUniqueInputSchema: z.ZodType<Prisma.PatientBillsWhereUniqueInput> = z
  .object({
    id: z.number().int(),
  })
  .and(
    z
      .object({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => PatientBillsWhereInputSchema),
            z.lazy(() => PatientBillsWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => PatientBillsWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => PatientBillsWhereInputSchema),
            z.lazy(() => PatientBillsWhereInputSchema).array(),
          ])
          .optional(),
        bill_id: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        service_id: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        service_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        quantity: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        unit_cost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        total_cost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        service: z
          .union([
            z.lazy(() => ServicesScalarRelationFilterSchema),
            z.lazy(() => ServicesWhereInputSchema),
          ])
          .optional(),
        payment: z
          .union([
            z.lazy(() => PaymentScalarRelationFilterSchema),
            z.lazy(() => PaymentWhereInputSchema),
          ])
          .optional(),
      })
      .strict(),
  );

export default PatientBillsWhereUniqueInputSchema;
