'use server';

import { clerkClient } from '@clerk/nextjs/server';
import { reviewSchema } from '@/components/dialogs/review-form';
import type { ReviewFormValues } from '@/components/dialogs/review-form';
import db from '@/lib/db';

export async function deleteDataById(
  id: string,

  deleteType: 'doctor' | 'staff' | 'patient' | 'payment' | 'bill',
) {
  try {
    switch (deleteType) {
      case 'doctor':
        await db.doctor.delete({ where: { id: id } });
      case 'staff':
        await db.staff.delete({ where: { id: id } });
      case 'patient':
        await db.patient.delete({ where: { id: id } });
      case 'payment':
        await db.payment.delete({ where: { id: Number(id) } });
    }

    if (deleteType === 'staff' || deleteType === 'patient' || deleteType === 'doctor') {
      const client = await clerkClient();
      await client.users.deleteUser(id);
    }

    return {
      message: 'Data deleted successfully',
      status: 200,
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      message: 'Internal Server Error',
      status: 500,
      success: false,
    };
  }
}

export async function createReview(values: ReviewFormValues) {
  try {
    const validatedFields = reviewSchema.parse(values);

    await db.rating.create({
      data: {
        ...validatedFields,
      },
    });

    return {
      message: 'Review created successfully',
      status: 200,
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      message: 'Internal Server Error',
      status: 500,
      success: false,
    };
  }
}
