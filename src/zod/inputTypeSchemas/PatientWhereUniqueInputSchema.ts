import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentListRelationFilterSchema } from './AppointmentListRelationFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { MedicalRecordsListRelationFilterSchema } from './MedicalRecordsListRelationFilterSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { PaymentListRelationFilterSchema } from './PaymentListRelationFilterSchema';
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PatientWhereUniqueInputSchema: z.ZodType<Prisma.PatientWhereUniqueInput> = z
  .union([
    z.object({
      id: z.string(),
      email: z.string(),
    }),
    z.object({
      id: z.string(),
    }),
    z.object({
      email: z.string(),
    }),
  ])
  .and(
    z
      .object({
        id: z.string().optional(),
        email: z.string().optional(),
        AND: z
          .union([
            z.lazy(() => PatientWhereInputSchema),
            z.lazy(() => PatientWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => PatientWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => PatientWhereInputSchema),
            z.lazy(() => PatientWhereInputSchema).array(),
          ])
          .optional(),
        first_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        last_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        date_of_birth: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        gender: z
          .union([z.lazy(() => EnumGenderFilterSchema), z.lazy(() => GenderSchema)])
          .optional(),
        phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        marital_status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        emergency_contact_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        emergency_contact_number: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        relation: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        blood_group: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        allergies: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        medical_conditions: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        medical_history: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        insurance_provider: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        insurance_number: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        privacy_consent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        service_consent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        medical_consent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        img: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        colorCode: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
        medical: z.lazy(() => MedicalRecordsListRelationFilterSchema).optional(),
        payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
        ratings: z.lazy(() => RatingListRelationFilterSchema).optional(),
      })
      .strict(),
  );

export default PatientWhereUniqueInputSchema;
