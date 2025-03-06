'use server';

import { AppointmentStatus } from '@/types/data-types';
import { auth } from '@clerk/nextjs/server';
import type { VitalSignsFormData } from '@/components/dialogs/add-vital-signs';
import db from '@/lib/db';
import { AppointmentSchema, VitalSignsSchema } from '@/lib/schema';

export async function createNewAppointment(data: any) {
  try {
    const validatedData = AppointmentSchema.safeParse(data);

    if (!validatedData.success) {
      return { msg: 'Invalid data', success: false };
    }
    const validated = validatedData.data;

    await db.appointment.create({
      data: {
        appointment_date: new Date(validated.appointment_date),
        doctor_id: validated.doctor_id,
        note: validated.note,
        patient_id: data.patient_id,
        time: validated.time,
        type: validated.type,
      },
    });

    return {
      message: 'Appointment booked successfully',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { msg: 'Internal Server Error', success: false };
  }
}
export async function appointmentAction(
  id: string | number,

  status: AppointmentStatus,
  reason: string,
) {
  try {
    await db.appointment.update({
      data: {
        reason,
        status,
      },
      where: { id: Number(id) },
    });

    return {
      error: false,
      msg: `Appointment ${status.toLowerCase()} successfully`,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { msg: 'Internal Server Error', success: false };
  }
}

export async function addVitalSigns(
  data: VitalSignsFormData,
  appointmentId: string,
  doctorId: string,
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { msg: 'Unauthorized', success: false };
    }

    const validatedData = VitalSignsSchema.parse(data);

    let medicalRecord = null;

    if (!validatedData.medical_id) {
      medicalRecord = await db.medicalRecords.create({
        data: {
          appointment_id: Number(appointmentId),
          doctor_id: doctorId,
          patient_id: validatedData.patient_id,
        },
      });
    }

    const med_id = validatedData.medical_id || medicalRecord?.id;

    await db.vitalSigns.create({
      data: {
        ...validatedData,
        medical_id: Number(med_id!),
      },
    });

    return {
      msg: 'Vital signs added successfully',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { msg: 'Internal Server Error', success: false };
  }
}
