import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema';
import { MedicalRecordsScalarRelationFilterSchema } from './MedicalRecordsScalarRelationFilterSchema';
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema';
import { ServicesScalarRelationFilterSchema } from './ServicesScalarRelationFilterSchema';
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LabTestWhereUniqueInputSchema: z.ZodType<Prisma.LabTestWhereUniqueInput> = z
  .union([
    z.object({
      id: z.number().int(),
      service_id: z.number().int(),
    }),
    z.object({
      id: z.number().int(),
    }),
    z.object({
      service_id: z.number().int(),
    }),
  ])
  .and(
    z
      .object({
        id: z.number().int().optional(),
        service_id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => LabTestWhereInputSchema),
            z.lazy(() => LabTestWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => LabTestWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => LabTestWhereInputSchema),
            z.lazy(() => LabTestWhereInputSchema).array(),
          ])
          .optional(),
        record_id: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        test_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        result: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        services: z
          .union([
            z.lazy(() => ServicesScalarRelationFilterSchema),
            z.lazy(() => ServicesWhereInputSchema),
          ])
          .optional(),
        medical_record: z
          .union([
            z.lazy(() => MedicalRecordsScalarRelationFilterSchema),
            z.lazy(() => MedicalRecordsWhereInputSchema),
          ])
          .optional(),
      })
      .strict(),
  );

export default LabTestWhereUniqueInputSchema;
