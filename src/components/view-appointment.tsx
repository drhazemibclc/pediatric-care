import React from 'react';
import { calculateAge, formatDateTime } from '@/utils';
import { checkRole } from '@/utils/roles';
import { getAppointmentById } from '@/utils/services/appointment';
import { auth } from '@clerk/nextjs/server';
import { format } from 'date-fns';
import { Calendar, Phone } from 'lucide-react';
import { AppointmentAction } from './appointment-action';
import { AppointmentStatusIndicator } from './appointment-status-indicator';
import { ProfileImage } from './profile-image';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export const ViewAppointment = async ({ id }: { id: string | undefined }) => {
  const { data } = await getAppointmentById(Number(id!));
  const { userId } = await auth();

  if (!data) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-center rounded-full bg-blue-500/10 px-1.5 py-1 text-xs text-blue-600 hover:underline md:text-sm'
        >
          View
        </Button>
      </DialogTrigger>

      <DialogContent className='max-h-[95%] max-w-[425px] overflow-y-auto p-8 md:max-w-2xl 2xl:max-w-3xl'>
        <>
          <DialogHeader>
            <DialogTitle>Patient Appointment</DialogTitle>
            <DialogDescription>
              This appointment was booked on the {formatDateTime(data?.created_at.toString())}
            </DialogDescription>
          </DialogHeader>

          {data?.status === 'CANCELLED' && (
            <div className='mt-4 rounded-md bg-yellow-100 p-4'>
              <span className='text-sm font-semibold'>This appointment has been cancelled</span>
              <p className='text-sm'>
                <strong>Reason</strong>: {data?.reason}
              </p>
            </div>
          )}

          <div className='grid gap-4 py-4'>
            <p className='w-fit rounded bg-blue-100 py-1 text-xs text-blue-600 md:text-sm'>
              Personal Information
            </p>

            <div className='mb-16 flex flex-col gap-6 md:flex-row'>
              <div className='flex w-full gap-1 md:w-1/2'>
                <ProfileImage
                  url={data.patient?.img ?? '/default-profile.png'}
                  name={data?.patient?.first_name + ' ' + data?.patient?.last_name}
                  className='size-20 bg-blue-500'
                  textClassName='text-2xl'
                />

                <div className='space-y-0.5'>
                  <h2 className='text-lg font-semibold uppercase md:text-xl'>
                    {data?.patient?.first_name + ' ' + data?.patient?.last_name}
                  </h2>

                  <p className='flex items-center gap-2 text-gray-600'>
                    <Calendar size={20} className='text-gray-500' />
                    {calculateAge(data?.patient?.date_of_birth)}
                  </p>

                  <span className='flex items-center gap-2 text-sm'>
                    <Phone size={16} className='text-gray-500' />
                    {data?.patient?.phone}
                  </span>
                </div>
              </div>

              <div>
                <span className='text-sm text-gray-500'>Address</span>
                <p className='capitalize text-gray-600'>{data?.patient?.address}</p>
              </div>
            </div>

            <p className='w-fit rounded bg-blue-100 py-1 text-xs text-blue-600 md:text-sm'>
              Appointment Information
            </p>

            <div className='grid grid-cols-3 gap-10'>
              <div>
                <span className='text-sm text-gray-500'>Date</span>
                <p className='text-sm text-gray-600'>
                  {format(data?.appointment_date, 'MMM dd, yyyy')}
                </p>
              </div>
              <div>
                <span className='text-sm text-gray-500'>Time</span>
                <p>{data?.time}</p>
              </div>
              <div>
                <span className='text-sm text-gray-500'>Status</span>
                <AppointmentStatusIndicator status={data?.status} />
              </div>
            </div>

            {data?.note && (
              <div>
                <span className='text-sm text-gray-500'>Note from Patient</span>
                <p>{data?.note}</p>
              </div>
            )}

            <p className='mt-16 w-fit rounded bg-blue-100 px-2 py-1 text-xs text-blue-600 md:text-sm'>
              Physician Information
            </p>
            <div className='mb-8 flex w-full flex-col gap-8 md:flex-row'>
              <div className='flex gap-3'>
                <ProfileImage
                  url={data?.doctor?.img ?? ''}
                  name={data?.doctor?.name}
                  className='bg-emerald-600 xl:size-20'
                  textClassName='xl:text-2xl'
                />
                <div className=''>
                  <h2 className='text-lg font-medium uppercase'>{data?.doctor?.name}</h2>
                  <p className='flex items-center gap-2 capitalize text-gray-600'>
                    {data?.doctor?.specialization}
                  </p>
                </div>
              </div>
            </div>

            {((await checkRole('ADMIN')) || data?.doctor_id === userId) && (
              <>
                <p className='mt-4 w-fit rounded bg-blue-100 px-2 py-1 text-xs text-blue-600 md:text-sm'>
                  Perform Action
                </p>
                <AppointmentAction id={data.id} status={data?.status} />
              </>
            )}
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
};
