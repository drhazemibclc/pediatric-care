import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedManyWithoutDoctorInputSchema } from './AppointmentCreateNestedManyWithoutDoctorInputSchema';
import { DiagnosisCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisCreateNestedManyWithoutDoctorInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { RatingCreateNestedManyWithoutDoctorInputSchema } from './RatingCreateNestedManyWithoutDoctorInputSchema';

export const DoctorCreateWithoutWorking_daysInputSchema: z.ZodType<Prisma.DoctorCreateWithoutWorking_daysInput> =
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
      appointments: z.lazy(() => AppointmentCreateNestedManyWithoutDoctorInputSchema).optional(),
      ratings: z.lazy(() => RatingCreateNestedManyWithoutDoctorInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutDoctorInputSchema).optional(),
    })
    .strict();

export default DoctorCreateWithoutWorking_daysInputSchema;
