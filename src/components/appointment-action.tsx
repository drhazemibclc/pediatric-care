'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { appointmentAction } from '@/app/actions/appointment';
import type { AppointmentStatus } from '@prisma/client';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface ActionProps {
  id: string | number;
  status: string;
}
export const AppointmentAction = ({ id, status }: ActionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [reason, setReason] = useState('');
  const router = useRouter();

  const handleAction = async () => {
    try {
      setIsLoading(true);
      const newReason = reason || `Appointment has ben ${selected.toLowerCase()} on ${new Date()}`;

      const resp = await appointmentAction(id, selected as AppointmentStatus, newReason);

      if (resp.success) {
        toast.success(resp.msg);

        router.refresh();
      } else if (resp.error) {
        toast.error(resp.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className='flex items-center space-x-3'>
        <Button
          variant='outline'
          disabled={status === 'PENDING' || isLoading || status === 'COMPLETED'}
          className='bg-yellow-200 text-black'
          onClick={() => {
            return setSelected('PENDING');
          }}
        >
          Pending
        </Button>
        <Button
          variant='outline'
          disabled={status === 'SCHEDULED' || isLoading || status === 'COMPLETED'}
          className='bg-blue-200 text-black'
          onClick={() => {
            return setSelected('SCHEDULED');
          }}
        >
          Approve
        </Button>
        <Button
          variant='outline'
          disabled={status === 'COMPLETED' || isLoading || status === 'COMPLETED'}
          className='bg-emerald-200 text-black'
          onClick={() => {
            return setSelected('COMPLETED');
          }}
        >
          Completed
        </Button>
        <Button
          variant='outline'
          disabled={status === 'CANCELLED' || isLoading || status === 'COMPLETED'}
          className='bg-red-200 text-black'
          onClick={() => {
            return setSelected('CANCELLED');
          }}
        >
          Cancel
        </Button>
      </div>
      {selected === 'CANCELLED' && (
        <>
          <Textarea
            disabled={isLoading}
            className='mt-4'
            placeholder='Enter reason....'
            onChange={(e) => {
              return setReason(e.target.value);
            }}
          />
        </>
      )}

      {selected && (
        <div className='mt-6 flex items-center justify-between rounded bg-red-100 p-4'>
          <p className=''>Are you sure you want to perform this action?</p>
          <Button disabled={isLoading} type='button' onClick={handleAction}>
            Yes
          </Button>
        </div>
      )}
    </div>
  );
};
