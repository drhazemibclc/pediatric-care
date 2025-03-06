import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUpdateManyWithoutDoctorNestedInputSchema } from './AppointmentUpdateManyWithoutDoctorNestedInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EnumJOBTYPEFieldUpdateOperationsInputSchema } from './EnumJOBTYPEFieldUpdateOperationsInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RatingUpdateManyWithoutDoctorNestedInputSchema } from './RatingUpdateManyWithoutDoctorNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WorkingDaysUpdateManyWithoutDoctorNestedInputSchema } from './WorkingDaysUpdateManyWithoutDoctorNestedInputSchema';

export const DoctorUpdateWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorUpdateWithoutDiagnosisInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      specialization: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      license_number: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      address: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      department: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      img: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      colorCode: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      availability_status: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      type: z
        .union([
          z.lazy(() => JOBTYPESchema),
          z.lazy(() => EnumJOBTYPEFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      working_days: z.lazy(() => WorkingDaysUpdateManyWithoutDoctorNestedInputSchema).optional(),
      appointments: z.lazy(() => AppointmentUpdateManyWithoutDoctorNestedInputSchema).optional(),
      ratings: z.lazy(() => RatingUpdateManyWithoutDoctorNestedInputSchema).optional(),
    })
    .strict();

export default DoctorUpdateWithoutDiagnosisInputSchema;
