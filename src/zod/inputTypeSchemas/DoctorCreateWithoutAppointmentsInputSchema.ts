import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiagnosisCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisCreateNestedManyWithoutDoctorInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { RatingCreateNestedManyWithoutDoctorInputSchema } from './RatingCreateNestedManyWithoutDoctorInputSchema';
import { WorkingDaysCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysCreateNestedManyWithoutDoctorInputSchema';

export const DoctorCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorCreateWithoutAppointmentsInput> =
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
      working_days: z.lazy(() => WorkingDaysCreateNestedManyWithoutDoctorInputSchema).optional(),
      ratings: z.lazy(() => RatingCreateNestedManyWithoutDoctorInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutDoctorInputSchema).optional(),
    })
    .strict();

export default DoctorCreateWithoutAppointmentsInputSchema;
