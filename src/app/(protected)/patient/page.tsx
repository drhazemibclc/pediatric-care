import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { AvailableDoctorProps } from '@/types/data-types';
import { getPatientDashboardStatistics } from '@/utils/services/patient';
import { currentUser } from '@clerk/nextjs/server';
import { Briefcase, BriefcaseBusiness, BriefcaseMedical } from 'lucide-react';
import { AvailableDoctors } from '@/components/available-doctor';
import { AppointmentChart } from '@/components/charts/appointment-chart';
import { StatSummary } from '@/components/charts/stat-summary';
import { PatientRatingContainer } from '@/components/patient-rating-container';
import { StatCard } from '@/components/stat-card';
import { RecentAppointments } from '@/components/tables/recent-appointment';
import { Button } from '@/components/ui/button';

const PatientDashboard = async () => {
  const user = await currentUser();

  const { data, appointmentCounts, last5Records, totalAppointments, availableDoctor, monthlyData } =
    await getPatientDashboardStatistics(user?.id ?? 'N/A');

  if (user && !data) {
    redirect('/patient/registration');
  }

  if (!data) return null;

  const cardData = [
    {
      className: 'bg-blue-600/15',
      icon: Briefcase,
      iconClassName: 'bg-blue-600/25 text-blue-600',
      note: 'Total appointments',
      title: 'appointments',
      value: totalAppointments,
    },
    {
      className: 'bg-rose-600/15',
      icon: Briefcase,
      iconClassName: 'bg-rose-600/25 text-rose-600',
      note: 'Cancelled Appointments',
      title: 'cancelled',
      value: appointmentCounts?.CANCELLED,
    },
    {
      className: 'bg-yellow-600/15',
      icon: BriefcaseBusiness,
      iconClassName: 'bg-yellow-600/25 text-yellow-600',
      note: 'Pending Appointments',
      title: 'pending',
      value: (appointmentCounts?.PENDING ?? 0) + (appointmentCounts?.SCHEDULED ?? 0),
    },
    {
      className: 'bg-emerald-600/15',
      icon: BriefcaseMedical,
      iconClassName: 'bg-emerald-600/25 text-emerald-600',
      note: 'Successfully appointments',
      title: 'completed',
      value: appointmentCounts?.COMPLETED,
    },
  ];

  return (
    <div className='flex flex-col gap-6 rounded-xl px-3 py-6 xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-[69%]'>
        <div className='mb-8 rounded-xl bg-white p-4'>
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-lg font-semibold xl:text-2xl'>
              Welcome {data?.first_name || user?.firstName}
            </h1>

            <div className='space-x-2'>
              <Button size={'sm'}>{new Date().getFullYear()}</Button>
              <Button size='sm' variant='outline' className='hover:underline'>
                <Link href='/patient/self'>View Profile</Link>
              </Button>
            </div>
          </div>

          <div className='flex w-full flex-wrap gap-5'>
            {cardData?.map((el, id) => {
              return <StatCard key={id} {...el} link='#' />;
            })}
          </div>
        </div>

        <div className='h-[500px]'>
          <AppointmentChart data={monthlyData} />
        </div>

        <div className='mt-8 rounded-xl bg-white p-4'>
          <RecentAppointments data={last5Records} />
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-full xl:w-[30%]'>
        <div className='mb-8 h-[450px] w-full'>
          <StatSummary data={appointmentCounts} total={totalAppointments} />
        </div>

        <AvailableDoctors data={availableDoctor as AvailableDoctorProps} />

        <PatientRatingContainer />
      </div>
    </div>
  );
};

export default PatientDashboard;
