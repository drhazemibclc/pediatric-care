import { calculateDiscount } from '@/utils';
import { checkRole } from '@/utils/roles';
import type { PatientBills } from '@prisma/client';
import { format } from 'date-fns';
import { ReceiptText } from 'lucide-react';
import db from '@/lib/db';
import { ActionDialog } from '../action-dialog';
import { AddBills } from '../dialogs/add-bills';
import { Table } from '../tables/table';
import { Separator } from '../ui/separator';
import { GenerateFinalBills } from './generate-final-bill';

const columns = [
  {
    className: 'hidden md:table-cell',
    header: 'No',
    key: 'no',
  },
  {
    header: 'Service',
    key: 'service',
  },
  {
    className: '',
    header: 'Date',
    key: 'date',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Quantity',
    key: 'qnty',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Unit Price',
    key: 'price',
  },
  {
    className: '',
    header: 'Total Cost',
    key: 'total',
  },
  {
    className: 'hidden xl:table-cell',
    header: 'Action',
    key: 'action',
  },
];

interface ExtendedBillProps extends PatientBills {
  service: {
    service_name: string;
    id: number;
  };
}
export const BillsContainer = async ({ id }: { id: string }) => {
  const [data, servicesData] = await Promise.all([
    db.payment.findFirst({
      include: {
        bills: {
          include: {
            service: { select: { id: true, service_name: true } },
          },

          orderBy: { created_at: 'asc' },
        },
      },
      where: { appointment_id: Number(id) },
    }),
    db.services.findMany(),
  ]);

  let totalBills = 0;

  const billData = data?.bills || [];
  const discount = data
    ? calculateDiscount({
        amount: data?.total_amount,
        discount: data?.discount,
      })
    : null;

  if (billData) {
    totalBills = billData.reduce((sum, acc) => {
      return sum + acc.total_cost;
    }, 0);
  }

  const renderRow = (item: ExtendedBillProps) => {
    return (
      <tr
        key={item.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='hidden py-2 md:table-cell xl:py-6'># {item?.id}</td>

        <td className='items-center py-2'>{item?.service?.service_name}</td>

        <td className=''>{format(item?.service_date, 'MMM d, yyyy')}</td>

        <td className='hidden items-center py-2 md:table-cell'>{item?.quantity}</td>
        <td className='hidden lg:table-cell'>{item?.unit_cost.toFixed(2)}</td>
        <td>{item?.total_cost.toFixed(2)}</td>

        <td className='hidden xl:table-cell'>
          <ActionDialog type='delete' id={item?.id.toString()} deleteType='bill' />
        </td>
      </tr>
    );
  };

  return (
    <div className='rounded-xl bg-white p-2 2xl:p-4'>
      <div className='mb-6 flex w-full flex-col justify-between md:flex-row md:items-center'>
        <div className=''>
          <h1 className='text-xl font-semibold'>Patient Bills</h1>
          <div className='hidden items-center gap-1 lg:flex'>
            <ReceiptText size={20} className='text-gray-500' />
            <p className='text-2xl font-semibold'>{billData?.length}</p>
            <span className='text-sm text-gray-600 xl:text-base'>total records</span>
          </div>
        </div>

        {((await checkRole('ADMIN')) || (await checkRole('DOCTOR'))) && (
          <div className='mt-5 flex items-center justify-end'>
            <AddBills id={data?.id} appId={id} servicesData={servicesData} />

            <GenerateFinalBills id={data?.id} total_bill={totalBills} />
          </div>
        )}
      </div>

      <Table columns={columns} renderRow={renderRow} data={billData!} />

      <Separator />

      <div className='flex flex-wrap items-center justify-between space-y-6 py-2 md:text-center lg:flex-nowrap'>
        <div className='w-[120px]'>
          <span className='text-gray-500'>Total Bill</span>
          <p className='text-xl font-semibold'>{(data?.total_amount || totalBills).toFixed(2)}</p>
        </div>
        <div className='w-[120px]'>
          <span className='text-gray-500'>Discount</span>
          <p className='text-xl font-semibold text-yellow-600'>
            {(data?.discount || 0.0).toFixed(2)}{' '}
            <span className='text-sm text-gray-600'>
              {' '}
              ({discount?.discountPercentage?.toFixed(2) || '0.0'}%)
            </span>
          </p>
        </div>
        <div className='w-[120px]'>
          <span className='text-gray-500'>Payable</span>
          <p className='text-xl font-semibold'>{(discount?.finalAmount || 0.0).toFixed(2)}</p>
        </div>
        <div className='w-[120px]'>
          <span className='text-gray-500'>Amount Paid</span>
          <p className='text-xl font-semibold text-emerald-600'>
            {(data?.amount_paid || 0.0).toFixed(2)}
          </p>
        </div>
        <div className='w-[120px]'>
          <span className='text-gray-500'>Unpaid Amount</span>
          <p className='text-xl font-semibold text-red-600'>
            {(discount?.finalAmount ?? 0) - (data?.amount_paid ?? 0)}
          </p>
        </div>
      </div>
    </div>
  );
};
