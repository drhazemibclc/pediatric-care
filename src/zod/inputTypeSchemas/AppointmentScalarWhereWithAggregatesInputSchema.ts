import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentStatusSchema } from './AppointmentStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumAppointmentStatusWithAggregatesFilterSchema } from './EnumAppointmentStatusWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const AppointmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AppointmentScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      patient_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      doctor_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      appointment_date: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      time: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      status: z
        .union([
          z.lazy(() => EnumAppointmentStatusWithAggregatesFilterSchema),
          z.lazy(() => AppointmentStatusSchema),
        ])
        .optional(),
      type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      note: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      reason: z
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

export default AppointmentScalarWhereWithAggregatesInputSchema;
