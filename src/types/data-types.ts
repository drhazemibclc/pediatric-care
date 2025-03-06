export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum JobType {
  FULL = 'FULL',
  PART = 'PART',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DORMANT = 'DORMANT',
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  SCHEDULED = 'SCHEDULED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

export enum Role {
  ADMIN = 'ADMIN',
  NURSE = 'NURSE',
  DOCTOR = 'DOCTOR',
  LAB_TECHNICIAN = 'LAB_TECHNICIAN',
  PATIENT = 'PATIENT',
  CASHIER = 'CASHIER',
}

export interface Patient {
  id: string; // Clerk userId
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: Gender;
  phone: string;
  email: string;
  marital_status: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  relation: string;
  blood_group?: string;
  allergies?: string;
  medical_conditions?: string;
  medical_history?: string;
  insurance_provider?: string;
  insurance_number?: string;
  privacy_consent: boolean;
  service_consent: boolean;
  medical_consent: boolean;
  img?: string;
  colorCode?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Doctor {
  id: string;
  email: string;
  name: string;
  specialization: string;
  license_number: string;
  phone: string;
  address: string;
  department?: string;
  img?: string;
  colorCode?: string;
  availability_status?: string;
  type: JobType;
  created_at: Date;
  updated_at: Date;
}
export type AppointmentsChartProps = {
  name: string;
  appointment: number;
  completed: number;
}[];

export type Appointment = {
  id: string;
  patient_id: string;
  doctor_id: string;
  type: string;
  appointment_date: Date;
  time: string;
  status: AppointmentStatus;

  patient: Patient;
  doctor: Doctor;
};

export type AvailableDoctorProps = {
  id: string;
  name: string;
  specialization: string;
  img?: string;
  colorCode?: string;
  working_days: {
    day: string;
    start_time: string;
    close_time: string;
  }[];
}[];
