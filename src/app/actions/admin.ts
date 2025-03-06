'use server';

import { generateRandomColor } from '@/utils';
import { checkRole } from '@/utils/roles';
import { auth, clerkClient } from '@clerk/nextjs/server';
import db from '@/lib/db';
import { DoctorSchema, ServicesSchema, StaffSchema, WorkingDaysSchema } from '@/lib/schema';

export async function createNewStaff(data: any) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { msg: 'Unauthorized', success: false };
    }

    const isAdmin = await checkRole('ADMIN');

    if (!isAdmin) {
      return { msg: 'Unauthorized', success: false };
    }

    const values = StaffSchema.safeParse(data);

    if (!values.success) {
      return {
        errors: true,
        message: 'Please provide all required info',
        success: false,
      };
    }

    const validatedValues = values.data;

    const client = await clerkClient();

    const user = await client.users.createUser({
      emailAddress: [validatedValues.email],
      firstName: validatedValues.name.split(' ')[0],
      lastName: validatedValues.name.split(' ')[1],
      password: validatedValues.password,
      publicMetadata: { role: 'doctor' },
    });

    delete validatedValues['password'];

    const doctor = await db.staff.create({
      data: {
        address: validatedValues.address,
        colorCode: generateRandomColor(),
        department: validatedValues.department,
        email: validatedValues.email,
        id: user.id,
        license_number: validatedValues.license_number,
        name: validatedValues.name,
        phone: validatedValues.phone,
        role: validatedValues.role,
        status: 'ACTIVE',
      },
    });

    return {
      error: false,
      message: 'Doctor added successfully',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: 'Something went wrong', success: false };
  }
}
export async function createNewDoctor(data: any) {
  try {
    const values = DoctorSchema.safeParse(data);

    const workingDaysValues = WorkingDaysSchema.safeParse(data?.work_schedule);

    if (!values.success || !workingDaysValues.success) {
      return {
        errors: true,
        message: 'Please provide all required info',
        success: false,
      };
    }

    const validatedValues = values.data;
    const workingDayData = workingDaysValues.data!;

    const client = await clerkClient();

    const user = await client.users.createUser({
      emailAddress: [validatedValues.email],
      firstName: validatedValues.name.split(' ')[0],
      lastName: validatedValues.name.split(' ')[1],
      password: validatedValues.password,
      publicMetadata: { role: 'doctor' },
    });

    delete validatedValues['password'];

    const doctor = await db.doctor.create({
      data: {
        ...validatedValues,
        id: user.id,
      },
    });

    await Promise.all(
      workingDayData?.map((el) => {
        return db.workingDays.create({
          data: { ...el, doctor_id: doctor.id },
        });
      }),
    );

    return {
      error: false,
      message: 'Doctor added successfully',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: 'Something went wrong', success: false };
  }
}

export async function addNewService(data: any) {
  try {
    const isValidData = ServicesSchema.safeParse(data);

    const validatedData = isValidData.data;

    await db.services.create({
      data: { ...validatedData!, price: Number(data.price!) },
    });

    return {
      error: false,
      msg: 'Service added successfully',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { msg: 'Internal Server Error', success: false };
  }
}
