import React from 'react';
import Link from 'next/link';
import { getDoctorById } from '@/utils/services/doctor';
import { format } from 'date-fns';
import { BsCalendarDateFill, BsPersonWorkspace } from 'react-icons/bs';
import { FaBriefcaseMedical, FaCalendarDays } from 'react-icons/fa6';
import { IoTimeSharp } from 'react-icons/io5';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { availableDays } from '@/components/available-doctor';
import { ProfileImage } from '@/components/profile-image';
import { RatingContainer } from '@/components/rating-container';
import { RecentAppointments } from '@/components/tables/recent-appointment';

const DoctorProfile = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { data, totalAppointment } = await getDoctorById(params?.id);

  if (!data) return null;

  return (
    <div className='flex h-full flex-col gap-6 rounded-xl bg-gray-100/60 px-3 py-6 lg:flex-row 2xl:px-5'>
      <div className='w-full lg:w-[70%]'>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='flex flex-1 gap-4 rounded-md bg-blue-50 px-4 py-6'>
            <ProfileImage
              url={data?.img!}
              name={data?.name}
              className='size-20'
              bgColor={data?.colorCode!}
              textClassName='text-4xl text-black'
            />

            <div className='flex w-2/3 flex-col justify-between gap-x-4'>
              <div className='flex items-center gap-4'>
                <h1 className='text=xl font-semibold uppercase'>{data?.name}</h1>
              </div>
              <p className='text-sm text-gray-500'>{data?.address || 'No address information'}</p>

              <div className='mt-4 flex flex-wrap items-center justify-between gap-2 text-sm font-medium'>
                <div className='flex w-full text-base'>
                  <span>License #:</span>
                  <p className='font-semibold'>{data?.license_number}</p>
                </div>

                <div className='flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                  <FaBriefcaseMedical className='text-lg' />
                  <span className='capitalize'>{data?.specialization}</span>
                </div>
                <div className='flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                  <BsPersonWorkspace className='text-lg' />
                  <span className='capitalize'>{data?.type}</span>
                </div>
                <div className='flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                  <MdEmail className='text-lg' />
                  <span className='capitalize'>{data?.email}</span>
                </div>
                <div className='flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                  <MdLocalPhone className='text-lg' />
                  <span className='capitalize'>{data?.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SATS */}
          <div className='flex flex-1 flex-wrap justify-between gap-4'>
            <div className='doctorCard'>
              <FaBriefcaseMedical className='size-5' />
              <div>
                <h1 className='font-serif text-xl'>{totalAppointment}</h1>
                <span className='text-sm text-gray-500'>Appointments</span>
              </div>
            </div>
            <div className='doctorCard'>
              <FaCalendarDays className='size-5' />
              <div>
                <h1 className='font-serif text-xl'>{data?.working_days?.length}</h1>
                <span className='text-sm text-gray-500'>Working Days</span>
              </div>
            </div>

            <div className='doctorCard'>
              <IoTimeSharp className='size-5' />
              <div>
                <h1 className='font-serif text-xl'>{availableDays({ data: data.working_days })}</h1>
                <span className='text-sm text-gray-500'>Working Hours</span>
              </div>
            </div>
            <div className='doctorCard'>
              <BsCalendarDateFill className='size-5' />
              <div>
                <h1 className='font-serif text-xl'>{format(data?.created_at, 'yyyy-MM-dd')}</h1>
                <span className='text-sm text-gray-500'>Joined Date</span>
              </div>
            </div>
          </div>
        </div>
        {/* recent appointment */}

        <div className='mt-6 rounded-e-xl bg-white p-4'>
          <RecentAppointments data={data?.appointments} />
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className='flex w-full flex-col gap-4 lg:w-[30%]'>
        <div className='rounded-md bg-white p-4'>
          <h1 className='text-xl font-semibold'>Quick Links</h1>

          <div className='mt-8 flex flex-wrap gap-4 text-sm text-gray-500'>
            <Link
              href={`/record/appointments?id=${data?.id}`}
              className='bg-yellow-60 rounded-md p-3 hover:underline'
            >
              Doctor Appointments
            </Link>

            <Link href='#' className='rounded-md bg-purple-50 p-3 hover:underline'>
              Apply for Leave
            </Link>
          </div>
        </div>

        <RatingContainer id={params?.id} />
      </div>
    </div>
  );
};

export default DoctorProfile;
