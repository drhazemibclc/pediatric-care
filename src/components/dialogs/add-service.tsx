'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addNewService } from '@/app/actions/admin';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { ServicesSchema } from '@/lib/schema';
import { CustomInput } from '../custom-input';
import { Button } from '../ui/button';
import { CardDescription, CardHeader } from '../ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Form } from '../ui/form';

export const AddService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof ServicesSchema>>({
    defaultValues: {
      description: undefined,
      price: undefined,
      service_name: undefined,
    },
    resolver: zodResolver(ServicesSchema),
  });

  const handleOnSubmit = async (values: z.infer<typeof ServicesSchema>) => {
    try {
      setIsLoading(true);
      const resp = await addNewService(values);

      if (resp.success) {
        toast.success('Service added successfully!');

        router.refresh();

        form.reset();
      } else if (resp.error) {
        toast.error(resp.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size='sm' className='text-sm font-normal'>
            <Plus size={22} className='text-gray-500' /> Add New Service
          </Button>
        </DialogTrigger>
        <DialogContent>
          <CardHeader className='px-0'>
            <DialogTitle>Add New Service</DialogTitle>
            <CardDescription>
              Ensure accurate readings are perform as this may affect the diagnosis and other
              medical processes.
            </CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-8'>
              <CustomInput
                type='input'
                control={form.control}
                name='service_name'
                label='Service Name'
                placeholder=''
              />

              <CustomInput
                type='input'
                control={form.control}
                name='price'
                placeholder=''
                label='Service Price'
              />
              <div className='flex items-center gap-4'>
                <CustomInput
                  type='textarea'
                  control={form.control}
                  name='description'
                  placeholder=''
                  label='Service Description'
                />
              </div>

              <Button type='submit' disabled={isLoading} className='w-full bg-blue-600'>
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
