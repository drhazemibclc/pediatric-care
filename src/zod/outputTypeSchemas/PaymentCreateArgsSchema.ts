import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentCreateInputSchema } from '../inputTypeSchemas/PaymentCreateInputSchema';
import { PaymentIncludeSchema } from '../inputTypeSchemas/PaymentIncludeSchema';
import { PaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentUncheckedCreateInputSchema';
import { AppointmentArgsSchema } from '../outputTypeSchemas/AppointmentArgsSchema';
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema';
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema';
import { PaymentCountOutputTypeArgsSchema } from '../outputTypeSchemas/PaymentCountOutputTypeArgsSchema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z
  .object({
    id: z.boolean().optional(),
    bill_id: z.boolean().optional(),
    patient_id: z.boolean().optional(),
    appointment_id: z.boolean().optional(),
    bill_date: z.boolean().optional(),
    payment_date: z.boolean().optional(),
    discount: z.boolean().optional(),
    total_amount: z.boolean().optional(),
    amount_paid: z.boolean().optional(),
    payment_method: z.boolean().optional(),
    status: z.boolean().optional(),
    receipt_number: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsSchema)]).optional(),
    patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
    bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PaymentCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const PaymentCreateArgsSchema: z.ZodType<Prisma.PaymentCreateArgs> = z
  .object({
    select: PaymentSelectSchema.optional(),
    include: z.lazy(() => PaymentIncludeSchema).optional(),
    data: z.union([PaymentCreateInputSchema, PaymentUncheckedCreateInputSchema]),
  })
  .strict();

export default PaymentCreateArgsSchema;
