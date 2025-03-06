'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNewDoctor } from '@/app/actions/admin';
import { SPECIALIZATION } from '@/utils/seetings';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { DoctorSchema } from '@/lib/schema';
import { CustomInput, SwitchInput } from '../custom-input';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { Label } from '../ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const TYPES = [
  { label: 'Full-Time', value: 'FULL' },
  { label: 'Part-Time', value: 'PART' },
];

const WORKING_DAYS = [
  { label: 'Sunday', value: 'sunday' },
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tuesday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
];

type Day = {
  day: string;
  start_time?: string;
  close_time?: string;
};

export const DoctorForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [workSchedule, setWorkSchedule] = useState<Day[]>([]);

  const form = useForm<z.infer<typeof DoctorSchema>>({
    defaultValues: {
      address: '',
      department: '',
      email: '',
      img: '',
      license_number: '',
      name: '',
      password: '',
      phone: '',
      specialization: '',
      type: 'FULL',
    },
    resolver: zodResolver(DoctorSchema),
  });

  const handleSubmit = async (values: z.infer<typeof DoctorSchema>) => {
    try {
      if (workSchedule.length === 0) {
        toast.error('Please select work schedule');
        return;
      }

      setIsLoading(true);
      const resp = await createNewDoctor({
        ...values,
        work_schedule: workSchedule,
      });

      if (resp.success) {
        toast.success('Doctor added successfully!');

        setWorkSchedule([]);
        form.reset();
        router.refresh();
      } else if (resp.error) {
        toast.error(resp.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedSpecialization = form.watch('specialization');

  useEffect(() => {
    if (selectedSpecialization) {
      const department = SPECIALIZATION.find((el) => {
        return el.value === selectedSpecialization;
      });

      if (department) {
        form.setValue('department', department.department);
      }
    }
  }, [selectedSpecialization, form]);
  useEffect(() => {
    if (selectedSpecialization) {
      const department = SPECIALIZATION.find((el) => {
        return el.value === selectedSpecialization;
      });

      if (department) {
        form.setValue('department', department.department);
      }
    }
  }, [selectedSpecialization, form]); // Added form to the dependency array
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus size={20} />
          Add Doctor
        </Button>
      </SheetTrigger>

      <SheetContent className='w-full overflow-y-scroll rounded-xl rounded-r-xl md:right-[1%] md:top-[5%] md:h-[90%]'>
        <SheetHeader>
          <SheetTitle>Add New Doctor</SheetTitle>
        </SheetHeader>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='mt-5 space-y-8 2xl:mt-10'>
              <CustomInput
                type='radio'
                selectList={TYPES}
                control={form.control}
                name='type'
                label='Type'
                placeholder=''
                defaultValue='FULL'
              />

              <CustomInput
                type='input'
                control={form.control}
                name='name'
                placeholder="Doctor's name"
                label='Full Name'
              />

              <div className='flex items-center gap-2'>
                <CustomInput
                  type='select'
                  control={form.control}
                  name='specialization'
                  placeholder='Select specialization'
                  label='Specialization'
                  selectList={SPECIALIZATION}
                />
                <CustomInput
                  type='input'
                  control={form.control}
                  name='department'
                  placeholder='OPD'
                  label='Department'
                />
              </div>

              <CustomInput
                type='input'
                control={form.control}
                name='license_number'
                placeholder='License Number'
                label='License Number'
              />
              <div className='flex items-center gap-2'>
                <CustomInput
                  type='input'
                  control={form.control}
                  name='email'
                  placeholder='john@example.com'
                  label='Email Address'
                />

                <CustomInput
                  type='input'
                  control={form.control}
                  name='phone'
                  placeholder='9225600735'
                  label='Contact Number'
                />
              </div>

              <CustomInput
                type='input'
                control={form.control}
                name='address'
                placeholder='1479 Street, Apt 1839-G, NY'
                label='Address'
              />

              <CustomInput
                type='input'
                control={form.control}
                name='password'
                placeholder=''
                label='Password'
                inputType='password'
              />

              <div className='mt-6'>
                <Label>Working Days</Label>

                <SwitchInput data={WORKING_DAYS} setWorkSchedule={setWorkSchedule} />
              </div>

              <Button type='submit' disabled={isLoading} className='w-full'>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
