'use client';

import React from 'react';
import type { AppointmentsChartProps } from '@/types/data-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface DataProps {
  data: AppointmentsChartProps;
}
export const AppointmentChart = ({ data }: DataProps) => {
  return (
    <div className='h-full rounded-xl bg-white p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Appointments</h1>
      </div>

      <ResponsiveContainer width={'100%'} height='90%'>
        <BarChart width={100} height={300} data={data} barSize={25}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />

          <XAxis dataKey='name' axisLine={false} tick={{ fill: '#9ca3af' }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: '#9ca3af' }} tickLine={false} />
          <Tooltip contentStyle={{ borderColor: '#fff', borderRadius: '10px' }} />
          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{
              paddingBottom: '40px',
              paddingTop: '20px',
              textTransform: 'capitalize',
            }}
          />
          <Bar dataKey='appointment' fill='#000000' legendType='circle' radius={[10, 10, 0, 0]} />
          <Bar dataKey='completed' fill='#2563eb' legendType='circle' radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
