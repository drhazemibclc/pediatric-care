import React from 'react';
import Link from 'next/link';
import type { AvailableDoctorProps } from '@/types/data-types';
import { daysOfWeek } from '@/utils';
import { checkRole } from '@/utils/roles';
import { ProfileImage } from './profile-image';
import { Button } from './ui/button';
import { Card } from './ui/card';

const getToday = () => {
  const today = new Date().getDay();
  return daysOfWeek[today];
};

const todayDay = getToday();

interface Days {
  day: string;
  start_time: string;
  close_time: string;
}

interface DataProps {
  data: AvailableDoctorProps;
}

export const availableDays = ({ data }: { data: Days[] }) => {
  const isTodayWorkingDay = data?.find((dayObj) => {
    return dayObj?.day?.toLowerCase() === todayDay;
  });

  return isTodayWorkingDay
    ? `${isTodayWorkingDay?.start_time} - ${isTodayWorkingDay?.close_time}`
    : 'Not Available';
};
export const AvailableDoctors = async ({ data }: DataProps) => {
  return (
    <div className='rounded-xl bg-white p-4'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Available Doctors</h1>

        {(await checkRole('ADMIN')) && (
          <Button
            asChild
            variant={'outline'}
            disabled={data?.length === 0}
            className='disabled:cursor-not-allowed disabled:text-gray-200'
          >
            <Link href='/record/doctors'>View all</Link>
          </Button>
        )}
      </div>

      <div className='flex w-full flex-col space-y-5 md:flex-row md:flex-wrap md:gap-6 md:space-y-0'>
        {data?.map((doc, id) => {
          return (
            <Card
              key={id}
              className='flex min-h-28 w-full gap-4 border-none p-4 odd:bg-emerald-600/5 even:bg-yellow-600/5 md:w-[300px] xl:w-full'
            >
              <ProfileImage
                url={doc?.img}
                name={doc?.name}
                className={'min-h-14 min-w-14 md:flex md:min-h-16 md:min-w-16'}
                textClassName='text-2xl font-semibold text-black'
                bgColor={doc?.colorCode ?? ''}
              />
              {/* <p>{doc.colorCode}</p> */}
              <div>
                <h2 className='text-lg font-semibold md:text-xl'>{doc?.name}</h2>
                <p className='text-base capitalize text-gray-600'>{doc?.specialization}</p>
                <p className='flex items-center text-sm'>
                  <span className='hidden lg:flex'>Available Time:</span>
                  {availableDays({ data: doc?.working_days })}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
