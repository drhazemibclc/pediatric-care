'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNewPatient, updatePatient } from '@/app/actions/patient';
import { GENDER } from '@/lib';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Patient } from '@prisma/client';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { PatientFormSchema } from '@/lib/schema';
import { CustomInput } from './custom-input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Form } from './ui/form';

interface DataProps {
  data?: Patient;
  type: 'create' | 'update';
}

export const NewPatient = ({ data, type }: DataProps) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ Memoized userData to prevent unnecessary re-renders
  const userData = useMemo(
    () => ({
      email: user?.emailAddresses?.[0]?.emailAddress ?? '',
      first_name: user?.firstName ?? '',
      last_name: user?.lastName ?? '',
      phone: user?.phoneNumbers?.[0]?.phoneNumber ?? '',
    }),
    [user],
  );

  const userId = user?.id;
  const form = useForm<z.infer<typeof PatientFormSchema>>({
    defaultValues: {
      ...userData,
      address: '',
      allergies: '',
      blood_group: '',
      date_of_birth: new Date(),
      emergency_contact_name: '',
      emergency_contact_number: '',
      gender: 'MALE',
      insurance_number: '',
      insurance_provider: '',
      marital_status: 'single',
      medical_conditions: '',
      medical_history: '',
      relation: 'mother',
    },
    resolver: zodResolver(PatientFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof PatientFormSchema>> = async (values) => {
    setLoading(true);

    const res =
      type === 'create'
        ? await createNewPatient(values, userId ?? '')
        : await updatePatient(values, userId ?? '');

    setLoading(false);

    if (res?.success) {
      toast.success(res.msg);
      form.reset();
      router.push('/patient');
    } else {
      console.error(res);
      toast.error('Failed to create patient');
    }
  };

  // ✅ Properly handling default values & dependencies in useEffect
  useEffect(() => {
    if (type === 'create') {
      form.reset({ ...userData });
    } else if (type === 'update' && data) {
      form.reset({
        address: data.address ?? '',
        allergies: data.allergies ?? '',
        blood_group: data.blood_group ?? '',
        date_of_birth: new Date(data.date_of_birth),
        email: data.email ?? '',
        emergency_contact_name: data.emergency_contact_name ?? '',
        emergency_contact_number: data.emergency_contact_number ?? '',
        first_name: data.first_name ?? '',
        gender: data.gender ?? 'MALE',
        insurance_number: data.insurance_number ?? '',
        insurance_provider: data.insurance_provider ?? '',
        last_name: data.last_name ?? '',
        marital_status:
          (data.marital_status as 'married' | 'single' | 'divorced' | 'widowed' | 'separated') ??
          'single',
        medical_conditions: data.medical_conditions ?? '',
        medical_consent: data.medical_consent ?? false,
        medical_history: data.medical_history ?? '',
        phone: data.phone ?? '',
        privacy_consent: data.privacy_consent ?? false,
        relation: (data.relation as 'mother' | 'father' | 'husband' | 'wife' | 'other') ?? 'mother',
        service_consent: data.service_consent ?? false,
      });
    }
  }, [type, data, form, userData]);

  return (
    <Card className='w-full max-w-6xl p-4'>
      <CardHeader>
        <CardTitle>Patient Registration</CardTitle>
        <CardDescription>
          Please provide all the information below to help us understand better and provide good and
          quality service to you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-8'>
            <h3 className='text-lg font-semibold'>Personal Information</h3>
            <div className='flex flex-col items-center gap-2 gap-y-6 md:gap-x-4 lg:flex-row'>
              <CustomInput
                type='input'
                control={form.control}
                name='first_name'
                placeholder='John'
                label='First Name'
              />
              <CustomInput
                type='input'
                control={form.control}
                name='last_name'
                placeholder='Doe'
                label='Last Name'
              />
            </div>
            <CustomInput
              type='input'
              control={form.control}
              name='email'
              placeholder='john@example.com'
              label='Email Address'
            />
            <div className='flex flex-col items-center gap-2 gap-y-6 md:gap-x-4 lg:flex-row'>
              <CustomInput
                type='select'
                control={form.control}
                name='gender'
                placeholder='Select gender'
                label='Gender'
                selectList={GENDER}
              />
              <CustomInput
                type='input'
                control={form.control}
                name='date_of_birth'
                placeholder='01-05-2000'
                label='Date of Birth'
                inputType='date'
              />
            </div>

            <Button disabled={loading} type='submit' className='w-full px-6 md:w-fit'>
              {type === 'create' ? 'Submit' : 'Update'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
