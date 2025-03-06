import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LabTestUncheckedCreateNestedOneWithoutServicesInputSchema } from './LabTestUncheckedCreateNestedOneWithoutServicesInputSchema';
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema';

export const ServicesUncheckedCreateInputSchema: z.ZodType<Prisma.ServicesUncheckedCreateInput> = z
  .object({
    id: z.number().int().optional(),
    service_name: z.string(),
    description: z.string(),
    price: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    labtest: z.lazy(() => LabTestUncheckedCreateNestedOneWithoutServicesInputSchema).optional(),
    bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  })
  .strict();

export default ServicesUncheckedCreateInputSchema;
