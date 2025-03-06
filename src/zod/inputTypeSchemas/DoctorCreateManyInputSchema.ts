import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JOBTYPESchema } from './JOBTYPESchema';

export const DoctorCreateManyInputSchema: z.ZodType<Prisma.DoctorCreateManyInput> = z
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
  })
  .strict();

export default DoctorCreateManyInputSchema;
