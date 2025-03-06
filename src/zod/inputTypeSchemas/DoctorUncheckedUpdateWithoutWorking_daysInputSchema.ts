import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema';
import { EnumJOBTYPEFieldUpdateOperationsInputSchema } from './EnumJOBTYPEFieldUpdateOperationsInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RatingUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './RatingUncheckedUpdateManyWithoutDoctorNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const DoctorUncheckedUpdateWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutWorking_daysInput> =
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
      appointments: z
        .lazy(() => AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema)
        .optional(),
      ratings: z.lazy(() => RatingUncheckedUpdateManyWithoutDoctorNestedInputSchema).optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema)
        .optional(),
    })
    .strict();

export default DoctorUncheckedUpdateWithoutWorking_daysInputSchema;
