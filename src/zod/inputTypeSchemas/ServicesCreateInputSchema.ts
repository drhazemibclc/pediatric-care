import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestCreateNestedOneWithoutServicesInputSchema } from './LabTestCreateNestedOneWithoutServicesInputSchema';
import { PatientBillsCreateNestedManyWithoutServiceInputSchema } from './PatientBillsCreateNestedManyWithoutServiceInputSchema';

export const ServicesCreateInputSchema: z.ZodType<Prisma.ServicesCreateInput> = z
  .object({
    service_name: z.string(),
    description: z.string(),
    price: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    labtest: z.lazy(() => LabTestCreateNestedOneWithoutServicesInputSchema).optional(),
    bills: z.lazy(() => PatientBillsCreateNestedManyWithoutServiceInputSchema).optional(),
  })
  .strict();

export default ServicesCreateInputSchema;
