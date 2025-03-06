import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentStatusSchema } from './AppointmentStatusSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EnumAppointmentStatusFieldUpdateOperationsInputSchema } from './EnumAppointmentStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const AppointmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      patient_id: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      doctor_id: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      appointment_date: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      status: z
        .union([
          z.lazy(() => AppointmentStatusSchema),
          z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      note: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      reason: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      created_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      updated_at: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
    })
    .strict();

export default AppointmentUncheckedUpdateManyInputSchema;
