import Link from 'next/link';
import { checkRole } from '@/utils/roles';
import { auth } from '@clerk/nextjs/server';
import { EllipsisVertical, User } from 'lucide-react';
import { AppointmentActionDialog } from './appointment-action-dialog';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface ActionsProps {
  userId: string;
  status: string;
  patientId: string;
  doctorId: string;
  appointmentId: number;
}

export const AppointmentActionOptions = async ({
  patientId,
  doctorId,
  status,
  appointmentId,
}: ActionsProps) => {
  const user = await auth();
  const isAdmin = await checkRole('ADMIN');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='flex items-center justify-center rounded-full p-1'>
          <EllipsisVertical size={16} className='text-sm text-gray-500' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-56 p-3'>
        <div className='flex flex-col items-start space-y-3'>
          <span className='text-xs text-gray-400'>Perform Actions</span>
          <Button size='sm' variant='ghost' className='w-full justify-start' asChild>
            <Link href={`appointments/${appointmentId}`}>
              <User size={16} /> View Full Details
            </Link>
          </Button>

          {status !== 'SCHEDULED' && (
            <AppointmentActionDialog
              type='approve'
              id={appointmentId}
              disabled={isAdmin || user.userId === doctorId}
            />
          )}
          <AppointmentActionDialog
            type='cancel'
            id={appointmentId}
            disabled={
              status === 'PENDING' &&
              (isAdmin || user.userId === doctorId || user.userId === patientId)
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
