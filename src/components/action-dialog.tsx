'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteDataById } from '@/app/actions/general';
import { Trash2 } from 'lucide-react';
import { FaQuestion } from 'react-icons/fa6';
import { toast } from 'sonner';
import { ProfileImage } from './profile-image';
import { SmallCard } from './small-card';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';

interface Doctor {
  name: string;
  img?: string;
  colorCode?: string;
  email: string;
  phone: string;
  address?: string;
  department?: string;
  license_number?: string;
}

interface Staff {
  name: string;
  img?: string;
  colorCode?: string;
  role: 'ADMIN' | 'NURSE' | 'DOCTOR' | 'LAB_TECHNICIAN' | 'PATIENT' | 'CASHIER';
  email: string;
  phone: string;
  address?: string;
  department?: string;
  license_number?: string;
}

interface ActionDialogProps {
  type: 'doctor' | 'staff' | 'delete';
  id: string;
  data?: Doctor | Staff;
  deleteType?: 'doctor' | 'staff' | 'patient' | 'payment' | 'bill';
}

export const ActionDialog = ({ id, data, type, deleteType }: ActionDialogProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (type === 'delete') {
    const handleDelete = async () => {
      if (!deleteType) return; // Ensure deleteType is defined before proceeding

      try {
        setLoading(true);
        const res = await deleteDataById(id, deleteType);

        if (res.success) {
          toast.success('Record deleted successfully');
          router.refresh();
        } else {
          toast.error('Failed to delete record');
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='flex items-center justify-center rounded-full text-red-500'
          >
            <Trash2 size={16} className='text-red-500' />
            {deleteType === 'patient' && 'Delete'}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <div className='flex flex-col items-center justify-center py-6'>
            <DialogTitle>
              <div className='mb-2 rounded-full bg-red-200 p-4'>
                <FaQuestion size={50} className='text-red-500' />
              </div>
            </DialogTitle>

            <span className='text-xl text-black'>Delete Confirmation</span>
            <p className='text-sm'>Are you sure you want to delete the selected record?</p>

            <div className='mt-6 flex items-center justify-center gap-x-3'>
              <DialogClose asChild>
                <Button variant='outline' className='px-4 py-2'>
                  Cancel
                </Button>
              </DialogClose>

              <Button
                disabled={loading}
                variant='outline'
                className='bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive hover:text-white'
                onClick={handleDelete}
              >
                Yes. Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (type === 'staff' && data) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='flex items-center justify-center rounded-full text-blue-600 hover:underline'
          >
            View
          </Button>
        </DialogTrigger>

        <DialogContent className='max-h-[90%] max-w-[300px] overflow-y-auto p-8 md:max-w-2xl'>
          <DialogTitle className='mb-4 text-lg font-semibold text-gray-600'>
            Staff Information
          </DialogTitle>

          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <ProfileImage
                url={data.img ?? ''}
                name={data.name}
                className='xl:size-20'
                bgColor={data.colorCode ?? '#FFFFFF'}
                textClassName='xl:text-2xl'
              />

              <div className='flex flex-col'>
                <p className='text-xl font-semibold'>{data.name}</p>
                <span className='text-sm capitalize text-gray-600 md:text-base'>
                  {'role' in data ? data.role?.toLowerCase() : 'N/A'}
                </span>

                <span className='text-sm text-blue-500'>Full-Time</span>
              </div>
            </div>
          </div>

          <div className='mt-10 space-y-6'>
            <div className='flex flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center xl:justify-between'>
              <SmallCard label='Email Address' value={data.email} />
              <SmallCard label='Phone Number' value={data.phone} />
            </div>

            <div>
              <SmallCard label='Address' value={data.address || 'N/A'} />
            </div>

            <div className='flex flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center xl:justify-between'>
              <SmallCard label='Role' value={'role' in data ? data.role : 'N/A'} />
              <SmallCard label='Department' value={data.department || 'N/A'} />
              <SmallCard label='License Number' value={data.license_number || 'N/A'} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
};
