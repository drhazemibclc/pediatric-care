import React from 'react';
import Link from 'next/link';
import type { Appointment } from '@/types/data-types';
import { format } from 'date-fns';
import { AppointmentStatusIndicator } from '../appointment-status-indicator';
import { ProfileImage } from '../profile-image';
import { Button } from '../ui/button';
import { ViewAppointment } from '../view-appointment';
import { Table } from './table';

interface DataProps {
  data: Appointment[];
}
const columns = [
  { header: 'Info', key: 'name' },
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
export const RecentAppointments = ({ data }: DataProps) => {
  const renderRow = (item: Appointment) => {
    const name = item?.patient?.first_name + ' ' + item?.patient?.last_name;
    return (
      <tr
        key={item?.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='flex items-center gap-2 py-2 xl:py-4 2xl:gap-4'>
          <ProfileImage
            url={item.patient?.img ?? '/default-profile.png'}
            name={name}
            className='bg-violet-600'
            bgColor={item?.patient?.colorCode ?? ''}
          />
          <div>
            <h3 className='text-sm uppercase md:text-base md:font-medium'>{name}</h3>
            <span className='text-xs capitalize'>{item?.patient?.gender?.toLowerCase()}</span>
          </div>
        </td>

        <td className='hidden md:table-cell'>{format(item?.appointment_date, 'yyyy-MM-dd')}</td>
        <td className='hidden md:table-cell'>{item?.time}</td>
        <td className='hidden items-center py-2 md:table-cell'>
          <div className='2x:gap-4 flex items-center gap-2'>
            <ProfileImage
              url={item?.doctor?.img ?? 'N/A'}
              name={item?.doctor?.name}
              className='bg-blue-600'
              bgColor={item?.doctor?.colorCode ?? ''}
              textClassName='text-black font-medium'
            />
            <div>
              <h3 className='font-medium uppercase'>{item?.doctor?.name}</h3>
              <span className='text-xs capitalize'>{item?.doctor?.specialization}</span>
            </div>
          </div>
        </td>

        <td className='hidden xl:table-cell'>
          <AppointmentStatusIndicator status={item?.status} />
        </td>

        <td>
          <div className='flex items-center gap-x-2'>
            <ViewAppointment id={item?.id} />

            <Link href={`/record/appointments/${item?.id}`}>See all</Link>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className='rounded-xl bg-white p-2 2xl:p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Recent Appointments</h1>

        <Button asChild variant={'outline'}>
          <Link href='/record/appointments'>View All</Link>
        </Button>
      </div>

      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};
