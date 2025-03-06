import type { Prisma } from '@prisma/client';
import db from '@/lib/db';

export async function getAppointmentById(id: number) {
  try {
    if (!id) {
      return {
        message: 'Appointment id does not exist.',
        status: 404,
        success: false,
      };
    }

    const data = await db.appointment.findUnique({
      include: {
        doctor: {
          select: { id: true, img: true, name: true, specialization: true },
        },
        patient: {
          select: {
            address: true,
            date_of_birth: true,
            first_name: true,
            gender: true,
            id: true,
            img: true,
            last_name: true,
            phone: true,
          },
        },
      },
      where: { id },
    });

    if (!data) {
      return {
        data: null,
        message: 'Appointment data not found',
        status: 200,
        success: false,
      };
    }

    return { data, status: 200, success: true };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}

interface AllAppointmentsProps {
  page: number | string;
  limit?: number | string;
  search?: string;
  id?: string;
}

const buildQuery = (id?: string, search?: string) => {
  // Base conditions for search if it exists
  const searchConditions: Prisma.AppointmentWhereInput = search
    ? {
        OR: [
          {
            patient: {
              first_name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            patient: {
              last_name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            doctor: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
        ],
      }
    : {};

  // ID filtering conditions if ID exists
  const idConditions: Prisma.AppointmentWhereInput = id
    ? {
        OR: [{ patient_id: id }, { doctor_id: id }],
      }
    : {};

  // Combine both conditions with AND if both exist
  const combinedQuery: Prisma.AppointmentWhereInput =
    id || search
      ? {
          AND: [
            ...(Object.keys(searchConditions).length > 0 ? [searchConditions] : []),
            ...(Object.keys(idConditions).length > 0 ? [idConditions] : []),
          ],
        }
      : {};

  return combinedQuery;
};

export async function getPatientAppointments({ page, limit, search, id }: AllAppointmentsProps) {
  try {
    const PAGE_NUMBER = Number(page) <= 0 ? 1 : Number(page);
    const LIMIT = Number(limit) || 10;

    const SKIP = (PAGE_NUMBER - 1) * LIMIT; // 0 -9

    const [data, totalRecord] = await Promise.all([
      db.appointment.findMany({
        orderBy: { appointment_date: 'desc' },
        select: {
          appointment_date: true,
          doctor: {
            select: {
              colorCode: true,
              id: true,
              img: true,
              name: true,
              specialization: true,
            },
          },
          doctor_id: true,
          id: true,
          patient: {
            select: {
              colorCode: true,
              date_of_birth: true,
              first_name: true,
              gender: true,
              id: true,
              img: true,
              last_name: true,
              phone: true,
            },
          },
          patient_id: true,
          status: true,
          time: true,
          type: true,
        },
        skip: SKIP,
        take: LIMIT,
        where: buildQuery(id, search),
      }),
      db.appointment.count({
        where: buildQuery(id, search),
      }),
    ]);

    if (!data) {
      return {
        data: null,
        message: 'Appointment data not found',
        status: 200,
        success: false,
      };
    }

    const totalPages = Math.ceil(totalRecord / LIMIT);

    return {
      currentPage: PAGE_NUMBER,
      data,
      status: 200,
      success: true,
      totalPages,
      totalRecord,
    };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}

export async function getAppointmentWithMedicalRecordsById(id: number) {
  try {
    if (!id) {
      return {
        message: 'Appointment id does not exist.',
        status: 404,
        success: false,
      };
    }

    const data = await db.appointment.findUnique({
      include: {
        bills: true,
        doctor: true,
        medical: {
          include: {
            diagnosis: true,
            lab_test: true,
            vital_signs: true,
          },
        },
        patient: true,
      },
      where: { id },
    });

    if (!data) {
      return {
        message: 'Appointment data not found',
        status: 200,
        success: false,
      };
    }

    return { data, status: 200, success: true };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error', status: 500, success: false };
  }
}
