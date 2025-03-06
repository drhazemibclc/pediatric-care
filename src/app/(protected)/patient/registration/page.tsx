import React from 'react';
import { getPatientById } from '@/utils/services/patient';
import { auth } from '@clerk/nextjs/server';
import { NewPatient } from '@/components/new-patient';

const Registration = async () => {
  const { userId } = await auth();

  const { data } = await getPatientById(userId!);

  return (
    <div className='flex h-full w-full justify-center'>
      <div className='relative w-full max-w-6xl pb-10'>
        <NewPatient data={data!} type={!data ? 'create' : 'update'} />
      </div>
    </div>
  );
};

export default Registration;
