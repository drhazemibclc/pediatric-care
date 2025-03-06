'use client';

import Link from 'next/link';
import { formatNumber } from '@/utils';
import { Users } from 'lucide-react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';

interface StatData {
  PENDING?: number;
  SCHEDULED?: number;
  COMPLETED?: number;
}

interface StatSummaryProps {
  data: StatData;
  total: number;
}

export const StatSummary = ({ data, total }: StatSummaryProps) => {
  const dataInfo = [
    { count: total || 0, fill: 'white', name: 'Total' },
    {
      count: (data?.PENDING || 0) + (data?.SCHEDULED || 0),
      fill: '#000000',
      name: 'Appointments',
    },
    { count: data?.COMPLETED || 0, fill: '#2563eb', name: 'Consultation' },
  ];

  const appointment = dataInfo[1].count;
  const consultation = dataInfo[2].count;

  return (
    <div className='h-full w-full rounded-xl bg-white p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Summary</h1>

        <Button asChild size='sm' variant='outline' className='text-xs font-normal'>
          <Link href='/record/appointments'>See details</Link>
        </Button>
      </div>

      <div className='relative h-[75%] w-full'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={dataInfo}
          >
            <RadialBar background dataKey={'count'} />
          </RadialBarChart>
        </ResponsiveContainer>

        <Users
          size={30}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400'
        />
      </div>

      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <div className='h-5 w-5 rounded-xl bg-[#000000]' />
            <h1 className='font-bold'>{formatNumber(appointment)}</h1>
          </div>
          <h2 className='text-xs text-gray-400'>
            {dataInfo[1].name}({((appointment / (appointment + consultation)) * 100).toFixed(0)})
          </h2>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <div className='h-5 w-5 rounded-xl bg-[#2563eb]' />
            <h1 className='font-bold'>{formatNumber(consultation)}</h1>
          </div>

          <h2 className='text-xs text-gray-400'>
            {dataInfo[2].name}({((consultation / (appointment + consultation)) * 100).toFixed(0)})
          </h2>
        </div>
      </div>
    </div>
  );
};
