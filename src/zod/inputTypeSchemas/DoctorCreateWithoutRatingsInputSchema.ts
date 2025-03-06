import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppointmentCreateNestedManyWithoutDoctorInputSchema } from './AppointmentCreateNestedManyWithoutDoctorInputSchema';
import { DiagnosisCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisCreateNestedManyWithoutDoctorInputSchema';
import { JOBTYPESchema } from './JOBTYPESchema';
import { WorkingDaysCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysCreateNestedManyWithoutDoctorInputSchema';

export const DoctorCreateWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorCreateWithoutRatingsInput> =
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
      appointments: z.lazy(() => AppointmentCreateNestedManyWithoutDoctorInputSchema).optional(),
      diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutDoctorInputSchema).optional(),
    })
    .strict();

export default DoctorCreateWithoutRatingsInputSchema;
