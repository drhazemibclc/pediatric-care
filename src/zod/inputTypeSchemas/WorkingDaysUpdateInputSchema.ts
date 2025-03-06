import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DoctorUpdateOneRequiredWithoutWorking_daysNestedInputSchema } from './DoctorUpdateOneRequiredWithoutWorking_daysNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const WorkingDaysUpdateInputSchema: z.ZodType<Prisma.WorkingDaysUpdateInput> = z
  .object({
    day: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    start_time: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    close_time: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    created_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    updated_at: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutWorking_daysNestedInputSchema).optional(),
  })
  .strict();

export default WorkingDaysUpdateInputSchema;
