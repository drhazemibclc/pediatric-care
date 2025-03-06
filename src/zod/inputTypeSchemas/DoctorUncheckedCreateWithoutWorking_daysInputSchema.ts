import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema } from './AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema';
import { DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { RatingUncheckedCreateNestedManyWithoutDoctorInputSchema } from './RatingUncheckedCreateNestedManyWithoutDoctorInputSchema';

export const DoctorUncheckedCreateWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutWorking_daysInput> =
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
      appointments: z
        .lazy(() => AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema)
        .optional(),
      ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutDoctorInputSchema).optional(),
      diagnosis: z
        .lazy(() => DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema)
        .optional(),
    })
    .strict();

export default DoctorUncheckedCreateWithoutWorking_daysInputSchema;
