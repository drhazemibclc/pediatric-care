import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema } from './AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { RatingUncheckedCreateNestedManyWithoutDoctorInputSchema } from './RatingUncheckedCreateNestedManyWithoutDoctorInputSchema';
import { WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema';

export const DoctorUncheckedCreateWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutDiagnosisInput> =
  z
    .object({
      id: z.string(),
      email: z.string(),
      name: z.string(),
      specialization: z.string(),
      license_number: z.string(),
      phone: z.string(),
      address: z.string(),
      department: z.string().optional().nullable(),
      img: z.string().optional().nullable(),
      colorCode: z.string().optional().nullable(),
      availability_status: z.string().optional().nullable(),
      type: z.lazy(() => JOBTYPESchema).optional(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      working_days: z
        .lazy(() => WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema)
        .optional(),
      appointments: z
        .lazy(() => AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema)
        .optional(),
      ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutDoctorInputSchema).optional(),
    })
    .strict();

export default DoctorUncheckedCreateWithoutDiagnosisInputSchema;
