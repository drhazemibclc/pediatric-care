import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentListRelationFilterSchema } from './AppointmentListRelationFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DiagnosisListRelationFilterSchema } from './DiagnosisListRelationFilterSchema';
import { EnumJOBTYPEFilterSchema } from './EnumJOBTYPEFilterSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { WorkingDaysListRelationFilterSchema } from './WorkingDaysListRelationFilterSchema';

export const DoctorWhereInputSchema: z.ZodType<Prisma.DoctorWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => DoctorWhereInputSchema), z.lazy(() => DoctorWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => DoctorWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => DoctorWhereInputSchema), z.lazy(() => DoctorWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    specialization: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    license_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    department: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    img: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    colorCode: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    availability_status: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    type: z.union([z.lazy(() => EnumJOBTYPEFilterSchema), z.lazy(() => JOBTYPESchema)]).optional(),
    created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    working_days: z.lazy(() => WorkingDaysListRelationFilterSchema).optional(),
    appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
    ratings: z.lazy(() => RatingListRelationFilterSchema).optional(),
    diagnosis: z.lazy(() => DiagnosisListRelationFilterSchema).optional(),
  })
  .strict();

export default DoctorWhereInputSchema;
