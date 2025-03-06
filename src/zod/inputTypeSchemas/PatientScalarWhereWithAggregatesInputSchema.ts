import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumGenderWithAggregatesFilterSchema } from './EnumGenderWithAggregatesFilterSchema';
import { GenderSchema } from './GenderSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const PatientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PatientScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PatientScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PatientScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PatientScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      first_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      last_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      date_of_birth: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      gender: z
        .union([z.lazy(() => EnumGenderWithAggregatesFilterSchema), z.lazy(() => GenderSchema)])
        .optional(),
      phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      marital_status: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      address: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      emergency_contact_name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      emergency_contact_number: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      relation: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      blood_group: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      allergies: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      medical_conditions: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      medical_history: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      insurance_provider: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      insurance_number: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      privacy_consent: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      service_consent: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      medical_consent: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      img: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      colorCode: z
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

export default PatientScalarWhereWithAggregatesInputSchema;
