'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addNewBill } from '@/app/actions/medical';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Services } from '@prisma/client';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { PatientBillSchema } from '@/lib/schema';
import { CustomInput } from '../custom-input';
import { Button } from '../ui/button';
import { CardDescription, CardHeader } from '../ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Form } from '../ui/form';

interface SelectOption {
  label: string;
  value: string;
}

interface DataProps {
  id?: string | number;
  appId?: string | number;
  servicesData: Services[];
}

export const AddBills = ({ id, appId, servicesData }: DataProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<SelectOption[] | undefined>();

  const form = useForm<z.infer<typeof PatientBillSchema>>({
    defaultValues: {
      appointment_id: String(appId),
      bill_id: String(id),
      quantity: undefined,
      service_date: new Date().toDateString(),
      service_id: undefined,
      total_cost: undefined,
      unit_cost: undefined,
    },
    resolver: zodResolver(PatientBillSchema),
  });

  const handleOnSubmit = async (values: z.infer<typeof PatientBillSchema>) => {
    try {
      setIsLoading(true);
      const resp = await addNewBill(values);

      if (resp.success) {
        toast.success('Patient bill added successfully!');
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

  useEffect(() => {
    if (servicesData) {
      setData(
        servicesData.map((service) => ({
          label: service.service_name,
          value: service.id.toString(),
        })),
      );
    }
  }, [servicesData, id]);

  const selectedService = form.watch('service_id');
  const quantity = form.watch('quantity');

  useEffect(() => {
    if (selectedService) {
      const unit_cost = servicesData.find((el) => el.id === Number(selectedService));

      if (unit_cost) {
        form.setValue('unit_cost', unit_cost.price.toFixed(2));
        if (quantity) {
          const totalCost = Number(quantity) * unit_cost.price;
          form.setValue('total_cost', totalCost.toFixed(2));
        }
      } else {
        form.setValue('unit_cost', '0.00');
        form.setValue('total_cost', '0.00');
      }
    }
  }, [selectedService, quantity, servicesData, form]); //add servicesData to dependency array

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size='sm' className='text-sm font-normal'>
            <Plus size={22} className='text-gray-400' />
            Add Bill
          </Button>
        </DialogTrigger>
        <DialogContent>
          <CardHeader className='px-0'>
            <DialogTitle>Add Patient Bill</DialogTitle>
            <CardDescription>
              Ensure accurate readings are perform as this may affect the diagnosis and other
              medical processes.
            </CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-8'>
              <div className='flex items-center gap-2'>
                <CustomInput
                  type='select'
                  control={form.control}
                  name='service_id'
                  placeholder='Select service'
                  label='Service Name'
                  selectList={data!}
                />
                <CustomInput
                  type='input'
                  control={form.control}
                  name='unit_cost'
                  placeholder=''
                  label='Unit Cost'
                />
              </div>

              <div className='flex items-center gap-2'>
                <CustomInput
                  type='input'
                  control={form.control}
                  name='quantity'
                  placeholder='Enter quantity'
                  label='Quantity'
                />
                <CustomInput
                  type='input'
                  control={form.control}
                  name='total_cost'
                  placeholder='0.00'
                  label='Total Cost'
                />
              </div>

              <CustomInput
                type='input'
                control={form.control}
                name='service_date'
                label='Service Date'
                placeholder=''
                inputType='date'
              />

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
