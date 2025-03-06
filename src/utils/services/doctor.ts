import { auth } from '@clerk/nextjs/server';
import db from '@/lib/db';
import { daysOfWeek } from '..';
import { processAppointments } from './patient';

export async function getDoctors() {
  try {
    const data = await db.doctor.findMany();

    return { data, status: 200, success: true };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}
export async function getDoctorDashboardStats() {
  try {
    const { userId } = await auth();

    const todayDate = new Date().getDay();
    const today = daysOfWeek[todayDate];

    const [totalPatient, totalNurses, appointments, doctors] = await Promise.all([
      db.patient.count(),
      db.staff.count({ where: { role: 'NURSE' } }),
      db.appointment.findMany({
        include: {
          doctor: {
            select: {
              colorCode: true,
              id: true,
              img: true,
              name: true,
              specialization: true,
            },
          },
          patient: {
            select: {
              colorCode: true,
              date_of_birth: true,
              first_name: true,
              gender: true,
              id: true,
              img: true,
              last_name: true,
            },
          },
        },
        orderBy: { appointment_date: 'desc' },
        where: { appointment_date: { lte: new Date() }, doctor_id: userId! },
      }),
      db.doctor.findMany({
        select: {
          colorCode: true,
          id: true,
          img: true,
          name: true,
          specialization: true,
          working_days: true,
        },
        take: 5,
        where: {
          working_days: {
            some: { day: { equals: today, mode: 'insensitive' } },
          },
        },
      }),
    ]);

    const { appointmentCounts, monthlyData } = await processAppointments(appointments);

    const last5Records = appointments.slice(0, 5);
    // const availableDoctors = doctors.slice(0, 5);

    return {
      appointmentCounts,
      availableDoctors: doctors,
      last5Records,
      monthlyData,
      totalAppointment: appointments?.length,
      totalNurses,
      totalPatient,
    };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}

export async function getDoctorById(id: string) {
  try {
    const [doctor, totalAppointment] = await Promise.all([
      db.doctor.findUnique({
        include: {
          appointments: {
            include: {
              doctor: {
                select: {
                  colorCode: true,
                  img: true,
                  name: true,
                  specialization: true,
                },
              },
              patient: {
                select: {
                  colorCode: true,
                  first_name: true,
                  gender: true,
                  id: true,
                  img: true,
                  last_name: true,
                },
              },
            },
            orderBy: { appointment_date: 'desc' },
            take: 10,
          },
          working_days: true,
        },
        where: { id },
      }),
      db.appointment.count({
        where: { doctor_id: id },
      }),
    ]);

    return { data: doctor, totalAppointment };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}

export async function getRatingById(id: string) {
  try {
    const data = await db.rating.findMany({
      include: {
        patient: { select: { first_name: true, last_name: true } },
      },
      where: { staff_id: id },
    });

    const totalRatings = data?.length;
    const sumRatings = data?.reduce((sum, el) => {
      return sum + el.rating;
    }, 0);

    const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
    const formattedRatings = (Math.round(averageRating * 10) / 10).toFixed(1);

    return {
      averageRating: formattedRatings,
      ratings: data,
      totalRatings,
    };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}

export async function getAllDoctors({
  page,
  limit,
  search,
}: {
  page: number | string;
  limit?: number | string;
  search?: string;
}) {
  try {
    const PAGE_NUMBER = Number(page) <= 0 ? 1 : Number(page);
    const LIMIT = Number(limit) || 10;

    const SKIP = (PAGE_NUMBER - 1) * LIMIT;

    const [doctors, totalRecords] = await Promise.all([
      db.doctor.findMany({
        include: { working_days: true },
        skip: SKIP,
        take: LIMIT,
        where: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { specialization: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        },
      }),
      db.doctor.count(),
    ]);

    const totalPages = Math.ceil(totalRecords / LIMIT);

    return {
      currentPage: PAGE_NUMBER,
      data: doctors,
      status: 200,
      success: true,
      totalPages,
      totalRecords,
    };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}
