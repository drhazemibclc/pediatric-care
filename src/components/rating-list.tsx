import React from 'react';
import { Star } from 'lucide-react';

interface Rating {
  id: number;
  rating: number;
  created_at: string; // Assuming created_at is a string representation of a date
  patient: {
    first_name: string;
    last_name: string;
  };
}
interface RatingListProps {
  data: Rating[];
}

export const RatingList = ({ data }: RatingListProps) => {
  return (
    <div className='rounded-lg bg-white'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-xl font-semibold'>Patient Reviews</h1>
      </div>

      <div className='space-y-2 p-2'>
        {data?.map((rate) => {
          return (
            <div key={rate?.id} className='rounded p-3 even:bg-gray-50'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <p className='text-base font-medium'>
                    {rate?.patient?.first_name + ' ' + rate?.patient?.last_name}
                  </p>
                  <span className='text-sm text-gray-500'>
                    {new Date(rate?.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='flex items-center text-yellow-600'>
                    {Array.from({ length: rate.rating }, (_, index) => {
                      return <Star key={index} className='text-lg' />;
                    })}

                    {/* <div className="flex items-center">
                    <Star className="text-lg" />
                    <span>{rate.rating}</span>
                  </div> */}
                  </div>
                  <span className=''>{rate.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          );
        })}

        {data?.length === 0 && (
          <div className='px-2 text-gray-600'>
            <p>No Reviews</p>
          </div>
        )}
      </div>
    </div>
  );
};
