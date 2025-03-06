'use server';

import { checkRole } from '@/utils/roles';
import type { DiagnosisFormData } from '@/components/dialogs/add-diagnosis';
import db from '@/lib/db';
import { DiagnosisSchema, PatientBillSchema, PaymentSchema } from '@/lib/schema';

export const addDiagnosis = async (data: DiagnosisFormData, appointmentId: string) => {
  try {
    const validatedData = DiagnosisSchema.parse(data);

    let medicalRecord = null;

    if (!validatedData.medical_id) {
      medicalRecord = await db.medicalRecords.create({
        data: {
          appointment_id: Number(appointmentId),
          doctor_id: validatedData.doctor_id,
          patient_id: validatedData.patient_id,
        },
      });
    }

    const med_id = validatedData.medical_id || medicalRecord?.id;
    await db.diagnosis.create({
      data: {
        ...validatedData,
        medical_id: Number(med_id),
      },
    });

    return {
      message: 'Diagnosis added successfully',
      status: 201,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: 'Failed to add diagnosis',
    };
  }
};

export async function addNewBill(data: any) {
  try {
    const isAdmin = await checkRole('ADMIN');
    const isDoctor = await checkRole('DOCTOR');

    if (!isAdmin && !isDoctor) {
      return {
        msg: 'You are not authorized to add a bill',
        success: false,
      };
    }

    const isValidData = PatientBillSchema.safeParse(data);
    if (!isValidData.success) {
      return { msg: 'Invalid input data', success: false };
    }
    const validatedData = isValidData.data;

    let bill_info = null;

    if (!data?.bill_id || data?.bill_id === 'undefined') {
      const info = await db.appointment.findUnique({
        select: {
          bills: {
            where: {
              appointment_id: Number(data?.appointment_id),
            },
          },
          id: true,
          patient_id: true,
        },
        where: { id: Number(data?.appointment_id) || 0 }, // Ensure valid number
      });

      if (!info) {
        return { msg: 'Appointment not found', success: false };
      }

      if (!info.bills?.length) {
        bill_info = await db.payment.create({
          data: {
            amount_paid: 0.0,
            appointment_id: info.id, // Use validated ID
            bill_date: new Date(),
            discount: 0.0,
            patient_id: info.patient_id, // Ensure patient ID is valid
            payment_date: new Date(),
            total_amount: 0.0,
          },
        });
      } else {
        bill_info = info.bills[0];
      }
    } else {
      bill_info = {
        id: Number(data.bill_id) || 0, // Ensure bill_id is a number
      };
    }

    if (!bill_info?.id) {
      return { msg: 'Failed to retrieve or create bill', success: false };
    }

    await db.patientBills.create({
      data: {
        bill_id: bill_info.id,
        quantity: Number(validatedData.quantity) || 1,
        service_date: new Date(validatedData.service_date),
        service_id: Number(validatedData.service_id) || 0,
        total_cost: Number(validatedData.total_cost) || 0,
        unit_cost: Number(validatedData.unit_cost) || 0,
      },
    });

    return { msg: 'Bill added successfully', success: true };
  } catch (error) {
    console.error(error);
    return {
      error: true,
      msg: error instanceof Error ? error.message : 'Internal Server Error',
      success: false,
    };
  }
}

export async function generateBill(data: any) {
  try {
    const isValidData = PaymentSchema.safeParse(data);
    if (!isValidData.success) {
      return { msg: 'Invalid payment data', success: false };
    }

    const validatedData = isValidData.data;

    const discountAmount =
      ((Number(validatedData.discount) || 0) / 100) * (Number(validatedData.total_amount) || 0);

    const res = await db.payment.update({
      data: {
        bill_date: validatedData.bill_date ? new Date(validatedData.bill_date) : new Date(),
        discount: discountAmount,
        total_amount: Number(validatedData.total_amount) || 0,
      },
      where: { id: Number(validatedData.id) || 0 }, // Ensure ID is valid
    });

    if (!res) {
      return { msg: 'Payment update failed', success: false };
    }

    await db.appointment.update({
      data: { status: 'COMPLETED' },
      where: { id: res.appointment_id },
    });

    return {
      error: false,
      msg: 'Bill generated successfully',
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      msg: error instanceof Error ? error.message : 'Internal Server Error',
      success: false,
    };
  }
}
