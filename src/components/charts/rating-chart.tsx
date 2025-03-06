'use client';

import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

export const RatingChart = ({
  totalRatings,
  averageRating,
}: {
  totalRatings: number;
  averageRating: number;
}) => {
  const negative = 5 - averageRating;

  const data = [
    { fill: '#2ecc71', name: 'Positive', value: averageRating },
    { fill: '#e74c3c', name: 'Negative', value: negative },
  ];

  return (
    <div className='relative h-80 rounded-md bg-white p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Ratings</h1>
      </div>

      <ResponsiveContainer width={'100%'} height={'100%'}>
        <PieChart>
          <Pie
            dataKey={'value'}
            startAngle={180}
            endAngle={0}
            data={data}
            cx={'50%'}
            cy={'50%'}
            innerRadius={70}
            fill='#8884d8'
          />
        </PieChart>
      </ResponsiveContainer>

      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center'>
        <h1 className='text-2xl font-bold'>{averageRating?.toFixed(1)}</h1>
        <p className='text-xs text-gray-500'>of max ratings</p>
      </div>

      <h2 className='absolute bottom-16 left-0 right-0 m-auto text-center font-medium'>
        Rated by {totalRatings} patients
      </h2>
    </div>
  );
};
