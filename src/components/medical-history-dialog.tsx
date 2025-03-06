import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface DataProps {
  id: string | number;
  patientId: string;
  medicalId?: string;
  doctor_id: string | number;
  label: React.ReactNode;
}
export const MedicalHistoryDialog = async ({ label }: DataProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-center rounded-full bg-blue-600/10 px-1.5 py-1 text-xs text-blue-600 hover:underline md:text-sm'
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className='max-h-[90%] max-w-[425px] overflow-y-auto p-8 md:max-w-2xl 2xl:max-w-4xl'>
        {/* <DiagnosisContainer
          id={id}
          patientId={patientId!}
          doctor_id={doctor_id!}
        /> */}

        <p>Diagnosis container form</p>
      </DialogContent>
    </Dialog>
  );
};
