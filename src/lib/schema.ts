import { z } from 'zod';

export const PatientFormSchema = z.object({
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(500, 'Address must be at most 500 characters'),
  allergies: z.string().optional(),
  blood_group: z.string().optional(),
  date_of_birth: z.coerce.date(),

  email: z.string().email('Invalid email address.'),
  emergency_contact_name: z
    .string()
    .min(2, 'Emergency contact name is required.')
    .max(50, 'Emergency contact must be at most 50 characters'),
  emergency_contact_number: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
  first_name: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(30, "First name can't be more than 50 characters"),
  gender: z.enum(['MALE', 'FEMALE'], { message: 'Gender is required' }),
  img: z.string().optional(),
  insurance_number: z.string().optional(),
  insurance_provider: z.string().optional(),
  last_name: z
    .string()
    .trim()
    .min(2, 'dLast name must be at least 2 characters')
    .max(30, "First name can't be more than 50 characters"),
  marital_status: z.enum(['married', 'single', 'divorced', 'widowed', 'separated'], {
    message: 'Marital status is required.',
  }),
  medical_conditions: z.string().optional(),
  medical_consent: z
    .boolean()
    .default(false)
    .refine(
      (val) => {
        return val === true;
      },
      {
        message: 'You must agree to the medical treatment terms.',
      },
    ),
  medical_history: z.string().optional(),
  phone: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
  privacy_consent: z
    .boolean()
    .default(false)
    .refine(
      (val) => {
        return val === true;
      },
      {
        message: 'You must agree to the privacy policy.',
      },
    ),
  relation: z.enum(['mother', 'father', 'husband', 'wife', 'other'], {
    message: 'Relations with contact person required',
  }),
  service_consent: z
    .boolean()
    .default(false)
    .refine(
      (val) => {
        return val === true;
      },
      {
        message: 'You must agree to the terms of service.',
      },
    ),
});

export const AppointmentSchema = z.object({
  appointment_date: z.string().min(1, 'Select appointment date'),
  doctor_id: z.string().min(1, 'Select physician'),
  note: z.string().optional(),
  time: z.string().min(1, 'Select appointment time'),
  type: z.string().min(1, 'Select type of appointment'),
});

export const DoctorSchema = z.object({
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(500, 'Address must be at most 500 characters'),
  department: z.string().min(2, 'Department is required.'),
  email: z.string().email('Invalid email address.'),
  img: z.string().optional(),
  license_number: z.string().min(2, 'License number is required'),
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' })
    .optional()
    .or(z.literal('')),
  phone: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
  specialization: z.string().min(2, 'Specialization is required.'),
  type: z.enum(['FULL', 'PART'], { message: 'Type is required.' }),
});

export const workingDaySchema = z.object({
  close_time: z.string(),
  day: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
  start_time: z.string(),
});
export const WorkingDaysSchema = z.array(workingDaySchema).optional();

export const StaffSchema = z.object({
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(500, 'Address must be at most 500 characters'),
  department: z.string().optional(),
  email: z.string().email('Invalid email address.'),
  img: z.string().optional(),
  license_number: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' })
    .optional()
    .or(z.literal('')),
  phone: z.string().min(10, 'Contact must be 10-digits').max(10, 'Contact must be 10-digits'),
  role: z.enum(['NURSE', 'LAB_TECHNICIAN'], { message: 'Role is required.' }),
});

export const VitalSignsSchema = z.object({
  body_temperature: z.coerce.number({
    message: 'Enter recorded body temperature',
  }),
  diastolic: z.coerce.number({
    message: 'Enter recorded diastolic blood pressure',
  }),
  heartRate: z.string({ message: 'Enter recorded heartbeat rate' }),
  height: z.coerce.number({ message: 'Enter recorded height (Cm)' }),
  medical_id: z.string(),
  oxygen_saturation: z.coerce.number().optional(),
  patient_id: z.string(),
  respiratory_rate: z.coerce.number().optional(),
  systolic: z.coerce.number({
    message: 'Enter recorded systolic blood pressure',
  }),
  weight: z.coerce.number({ message: 'Enter recorded weight (Kg)' }),
});

export const DiagnosisSchema = z.object({
  diagnosis: z.string({ message: 'Diagnosis required' }),
  doctor_id: z.string(),
  follow_up_plan: z.string().optional(),
  medical_id: z.string(),
  notes: z.string().optional(),
  patient_id: z.string(),
  prescribed_medications: z.string().optional(),
  symptoms: z.string({ message: 'Symptoms required' }),
});

export const PaymentSchema = z.object({
  // patient_id: z.string(),
  // appointment_id: z.string(),
  bill_date: z.coerce.date(),

  // payment_date: z.string(),
  discount: z.string({ message: 'discount' }),

  id: z.string(),
  total_amount: z.string(),
  // amount_paid: z.string(),
});

export const PatientBillSchema = z.object({
  appointment_id: z.string(),
  bill_id: z.string(),
  quantity: z.string({ message: 'Quantity is required' }),
  service_date: z.string(),
  service_id: z.string(),
  total_cost: z.string({ message: 'Total cost is required' }),
  unit_cost: z.string({ message: 'Unit cost is required' }),
});

export const ServicesSchema = z.object({
  description: z.string({ message: 'Service description is required' }),
  price: z.string({ message: 'Service price is required' }),
  service_name: z.string({ message: 'Service name is required' }),
});
