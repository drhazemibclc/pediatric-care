'use server';

import { clerkClient } from '@clerk/nextjs/server';
import { type z } from 'zod';
import db from '@/lib/db';
import { PatientFormSchema } from '@/lib/schema';

export async function updatePatient(data: z.infer<typeof PatientFormSchema>, pid: string) {
  try {
    const validateData = PatientFormSchema.safeParse(data);

    if (!validateData.success) {
      return {
        error: true,
        msg: 'Provide all required fields',
        success: false,
      };
    }

    const patientData = validateData.data;

    const client = await clerkClient();
    await client.users.updateUser(pid, {
      firstName: patientData.first_name,
      lastName: patientData.last_name,
    });

    await db.patient.update({
      data: {
        ...patientData,
      },
      where: { id: pid },
    });

    return {
      error: false,
      msg: 'Patient info updated successfully',
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      error: true,
      msg: error instanceof Error ? error.message : 'An unknown error occurred',
      success: false,
    };
  }
}
export async function createNewPatient(data: z.infer<typeof PatientFormSchema>, pid: string) {
  try {
    const validateData = PatientFormSchema.safeParse(data);

    if (!validateData.success) {
      return {
        error: true,
        msg: 'Provide all required fields',
        success: false,
      };
    }

    const patientData = validateData.data;
    let patient_id = pid;

    const client = await clerkClient();
    if (pid === 'new-patient') {
      const user = await client.users.createUser({
        emailAddress: [patientData.email],
        firstName: patientData.first_name,
        lastName: patientData.last_name,
        password: patientData.phone,
        publicMetadata: { role: 'patient' },
      });

      patient_id = user?.id;
    } else {
      await client.users.updateUser(pid, {
        publicMetadata: { role: 'patient' },
      });
    }

    await db.patient.create({
      data: {
        ...patientData,
        id: patient_id,
      },
    });

    return { error: false, msg: 'Patient created successfully', success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      return { error: true, msg: error.message, success: false };
    } else {
      console.error(error);
      return { error: true, msg: 'An unknown error occurred', success: false };
    }
  }
}
