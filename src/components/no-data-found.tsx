import { FaMagnifyingGlassChart } from 'react-icons/fa6';

export const NoDataFound = ({ note }: { note?: string }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center py-0'>
      <FaMagnifyingGlassChart size={80} className='text-gray-600' />
      <span className='mt-2 text-xl font-medium text-gray-500'>{note || 'No Record Found'}</span>
    </div>
  );
};
