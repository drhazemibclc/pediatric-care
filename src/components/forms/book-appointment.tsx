'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNewAppointment } from '@/app/actions/appointment';
import { generateTimes } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Doctor, Patient } from '@prisma/client';
import { UserPen } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { AppointmentSchema } from '@/lib/schema';
import { CustomInput } from '../custom-input';
import { ProfileImage } from '../profile-image';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const TYPES = [
  { label: 'General Consultation', value: 'General Consultation' },
  { label: 'General Check up', value: 'General Check Up' },
  { label: 'Antenatal', value: 'Antenatal' },
  { label: 'Maternity', value: 'Maternity' },
  { label: 'Lab Test', value: 'Lab Test' },
  { label: 'ANT', value: 'ANT' },
];

export const BookAppointment = ({ data, doctors }: { data: Patient; doctors: Doctor[] }) => {
  const [loading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [physicians] = useState<Doctor[] | undefined>(doctors);

  const appointmentTimes = generateTimes(8, 17, 30);

  const patientName = `${data?.first_name} ${data?.last_name}`;

  const form = useForm<z.infer<typeof AppointmentSchema>>({
    defaultValues: {
      appointment_date: '',
      doctor_id: '',
      note: '',
      time: '',
      type: '',
    },
    resolver: zodResolver(AppointmentSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof AppointmentSchema>> = async (values) => {
    try {
      setIsSubmitting(true);
      const newData = { ...values, patient_id: data?.id ?? '' };

      const res = await createNewAppointment(newData);

      if (res.success) {
        form.reset({});
        router.refresh();
        toast.success('Appointment created successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='flex w-full items-center justify-start gap-2 bg-blue-600 text-sm font-light text-white'
        >
          <UserPen size={16} /> Book Appointment
        </Button>
      </SheetTrigger>

      <SheetContent className='md:h-p[95%] w-full rounded-xl rounded-r-2xl md:right-[1%] md:top-[2.5%]'>
        {loading ? (
          <div className='flex h-full items-center justify-center'>
            <span>Loading</span>
          </div>
        ) : (
          <div className='h-full overflow-y-auto p-4'>
            <SheetHeader>
              <SheetTitle>Book Appointment</SheetTitle>
            </SheetHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-8 2xl:mt-10'>
                <div className='flex w-full items-center gap-4 rounded-md border border-input bg-background px-3 py-1'>
                  <ProfileImage
                    url={data?.img ?? ''}
                    name={patientName}
                    className='size-16 border border-input'
                    bgColor={data?.colorCode ?? ''}
                  />

                  <div>
                    <p className='text-lg font-semibold'>{patientName}</p>
                    <span className='text-sm capitalize text-gray-500'>{data?.gender}</span>
                  </div>
                </div>

                <CustomInput
                  type='select'
                  selectList={TYPES}
                  control={form.control}
                  name='type'
                  label='Appointment Type'
                  placeholder='Select a appointment type'
                />

                <FormField
                  control={form.control}
                  name='doctor_id'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Physician</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a physician' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className=''>
                            {physicians?.map((i, id) => {
                              return (
                                <SelectItem key={id} value={i.id} className='p-2'>
                                  <div className='flex flex-row gap-2 p-2'>
                                    <ProfileImage
                                      url={i?.img ?? ''}
                                      name={i?.name}
                                      bgColor={i?.colorCode ?? ''}
                                      textClassName='text-black'
                                    />
                                    <div>
                                      <p className='text-start font-medium'>{i.name}</p>
                                      <span className='text-sm text-gray-600'>
                                        {i?.specialization}
                                      </span>
                                    </div>
                                  </div>
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <div className='flex items-center gap-2'>
                  <CustomInput
                    type='input'
                    control={form.control}
                    name='appointment_date'
                    placeholder=''
                    label='Date'
                    inputType='date'
                  />
                  <CustomInput
                    type='select'
                    control={form.control}
                    name='time'
                    placeholder='Select time'
                    label='Time'
                    selectList={appointmentTimes}
                  />
                </div>

                <CustomInput
                  type='textarea'
                  control={form.control}
                  name='note'
                  placeholder='Additional note'
                  label='Additional Note'
                />

                <Button disabled={isSubmitting} type='submit' className='w-full bg-blue-600'>
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
