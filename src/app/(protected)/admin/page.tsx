import React from 'react';
import { getAdminDashboardStats } from '@/utils/services/admin';
import { BriefcaseBusiness, BriefcaseMedical, User, Users } from 'lucide-react';
import { AvailableDoctors } from '@/components/available-doctor';
import { AppointmentChart } from '@/components/charts/appointment-chart';
import { StatSummary } from '@/components/charts/stat-summary';
import { StatCard } from '@/components/stat-card';
import { RecentAppointments } from '@/components/tables/recent-appointment';
import { Button } from '@/components/ui/button';

const AdminDashboard = async () => {
  const {
    availableDoctors,
    last5Records,
    appointmentCounts,
    monthlyData,
    totalDoctors,
    totalPatient,
    totalAppointments,
  } = await getAdminDashboardStats();

  const cardData = [
    {
      className: 'bg-blue-600/15',
      icon: Users,
      iconClassName: 'bg-blue-600/25 text-blue-600',
      link: '/manage-patients',
      note: 'Total patients',
      title: 'Patients',
      value: totalPatient,
    },
    {
      className: 'bg-rose-600/15',
      icon: User,
      iconClassName: 'bg-rose-600/25 text-rose-600',
      link: '/manage-doctors',
      note: 'Total doctors',
      title: 'Doctors',
      value: totalDoctors,
    },
    {
      className: 'bg-yellow-600/15',
      icon: BriefcaseBusiness,
      iconClassName: 'bg-yellow-600/25 text-yellow-600',
      link: '/manage-appointments',
      note: 'Total appointments',
      title: 'Appointments',
      value: totalAppointments,
    },
    {
      className: 'bg-emerald-600/15',
      icon: BriefcaseMedical,
      iconClassName: 'bg-emerald-600/25 text-emerald-600',
      link: '/manage-appointments',
      note: 'Total consultation',
      title: 'Consultation',
      value: appointmentCounts?.COMPLETED,
    },
  ];

  return (
    <div className='flex flex-col gap-6 rounded-xl px-3 py-6 xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-[69%]'>
        <div className='mb-8 rounded-xl bg-white p-4'>
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Statistics</h1>
            <Button size={'sm'} variant={'outline'}>
              {new Date().getFullYear()}
            </Button>
          </div>

          <div className='flex w-full flex-wrap gap-5'>
            {cardData?.map((el, index) => {
              return (
                <StatCard
                  key={index}
                  title={el.title}
                  value={el.value!}
                  icon={el.icon}
                  className={el.className}
                  iconClassName={el.iconClassName}
                  note={el.note}
                  link={el.link}
                />
              );
            })}
          </div>
        </div>

        <div className='h-[500px]'>
          <AppointmentChart data={monthlyData!} />
        </div>

        <div className='mt-8 rounded-xl bg-white p-4'>
          <RecentAppointments data={last5Records!} />
        </div>
      </div>

      {/* RIGHT */}

      <div className='w-full xl:w-[30%]'>
        <div className='h-[450px] w-full'>
          <StatSummary data={appointmentCounts} total={totalAppointments!} />
        </div>

        <AvailableDoctors data={availableDoctors as any} />
      </div>
    </div>
  );
};

export default AdminDashboard;
