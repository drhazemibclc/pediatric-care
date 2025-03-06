import React from 'react';
import { type Appointment, type Doctor, type Patient } from '@/types/data-types';
import { checkRole, getRole } from '@/utils/roles';
import { DATA_LIMIT } from '@/utils/seetings';
import { getPatientAppointments } from '@/utils/services/appointment';
import { auth } from '@clerk/nextjs/server';
import { format } from 'date-fns';
import { BriefcaseBusiness } from 'lucide-react';
import { AppointmentActionOptions } from '@/components/appointment-actions';
import { AppointmentContainer } from '@/components/appointment-container';
import { AppointmentStatusIndicator } from '@/components/appointment-status-indicator';
import { Pagination } from '@/components/pagination';
import { ProfileImage } from '@/components/profile-image';
import SearchInput from '@/components/search-input';
import { Table } from '@/components/tables/table';
import { ViewAppointment } from '@/components/view-appointment';

const columns = [
  {
    header: 'Info',
    key: 'name',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Date',
    key: 'appointment_date',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Time',
    key: 'time',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Doctor',
    key: 'doctor',
  },
  {
    className: 'hidden xl:table-cell',
    header: 'Status',
    key: 'status',
  },
  {
    header: 'Actions',
    key: 'action',
  },
];

interface DataProps extends Appointment {
  patient: Patient;
  doctor: Doctor;
}
const Appointments = async (props: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const userRole = await getRole();
  const { userId } = await auth();
  const isPatient = await checkRole('PATIENT');

  const page = (searchParams?.p || '1') as string;
  const searchQuery = searchParams?.q || '';
  const id = searchParams?.id || undefined;

  let queryId = undefined;

  if (userRole == 'admin' || (userRole == 'doctor' && id) || (userRole === 'nurse' && id)) {
    queryId = id;
  } else if (userRole === 'doctor' || userRole === 'patient') {
    queryId = userId;
  } else if (userRole === 'nurse') {
    queryId = undefined;
  }

  const { data, totalPages, totalRecord, currentPage } = await getPatientAppointments({
    id: queryId!,
    page,
    search: searchQuery,
  });

  if (!data) return null;

  const renderItem = (item: DataProps) => {
    const patient_name = `${item?.patient?.first_name} ${item?.patient?.last_name}`;

    return (
      <tr
        key={item?.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='flex items-center gap-2 py-2 md:gap-4 xl:py-4'>
          <ProfileImage
            url={item.patient?.img ?? '/default-profile.png'}
            name={patient_name}
            bgColor={item?.patient?.colorCode!}
          />
          <div>
            <h3 className='font-semibold uppercase'>{patient_name}</h3>
            <span className='text-xs capitalize md:text-sm'>
              {item?.patient?.gender.toLowerCase()}
            </span>
          </div>
        </td>

        <td className='hidden md:table-cell'>{format(item?.appointment_date, 'yyyy-MM-dd')}</td>
        <td className='hidden md:table-cell'>{item.time}</td>

        <td className='hidden items-center py-2 md:table-cell'>
          <div className='flex items-center gap-2 md:gap-4'>
            <ProfileImage
              url={item.doctor?.img!}
              name={item.doctor?.name}
              bgColor={item?.doctor?.colorCode!}
              textClassName='text-black'
            />

            <div>
              <h3 className='font-semibold uppercase'>{item.doctor?.name}</h3>
              <span className='text-xs capitalize md:text-sm'>{item.doctor?.specialization}</span>
            </div>
          </div>
        </td>

        <td className='hidden xl:table-cell'>
          <AppointmentStatusIndicator status={item.status!} />
        </td>
        <td>
          <div className='flex items-center gap-2'>
            <ViewAppointment id={item?.id.toString()} />
            <AppointmentActionOptions
              userId={userId!}
              patientId={item?.patient_id}
              doctorId={item?.doctor_id}
              status={item?.status}
              appointmentId={+item.id}
            />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className='rounded-xl bg-white p-2 md:p-4 2xl:p-6'>
      <div className='flex items-center justify-between'>
        <div className='hidden items-center gap-1 lg:flex'>
          <BriefcaseBusiness size={20} className='text-gray-500' />
          <p className='text-2xl font-semibold'>{totalRecord ?? 0}</p>
          <span className='text-sm text-gray-600 xl:text-base'>total appointments</span>
        </div>

        <div className='flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start'>
          <SearchInput />

          {isPatient && <AppointmentContainer id={userId!} />}
        </div>
      </div>

      <div className='mt-6'>
        <Table columns={columns} renderRow={renderItem} data={data} />

        {data?.length > 0 && (
          <Pagination
            totalRecords={totalRecord!}
            currentPage={currentPage!}
            totalPages={totalPages!}
            limit={DATA_LIMIT}
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;
