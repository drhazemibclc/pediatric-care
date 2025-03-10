import React from 'react';
import type { SearchParamsProps } from '@/types';
import { checkRole } from '@/utils/roles';
import { DATA_LIMIT } from '@/utils/seetings';
import { getAllStaff } from '@/utils/services/staff';
import type { Staff } from '@prisma/client';
import { format } from 'date-fns';
import { Users } from 'lucide-react';
import { ActionDialog } from '@/components/action-dialog';
import { StaffForm } from '@/components/forms/staff-form';
import { Pagination } from '@/components/pagination';
import { ProfileImage } from '@/components/profile-image';
import SearchInput from '@/components/search-input';
import { Table } from '@/components/tables/table';

const columns = [
  {
    header: 'Info',
    key: 'name',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Role',
    key: 'role',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Phone',
    key: 'contact',
  },
  {
    className: 'hidden lg:table-cell',
    header: 'Email',
    key: 'email',
  },
  {
    className: 'hidden xl:table-cell',
    header: 'Joined Date',
    key: 'created_at',
  },
  {
    header: 'Actions',
    key: 'action',
  },
];

const StaffList = async (props: SearchParamsProps) => {
  const searchParams = await props.searchParams;
  const page = (searchParams?.p || '1') as string;
  const searchQuery = (searchParams?.q || '') as string;

  const { data, totalPages, totalRecords, currentPage } = await getAllStaff({
    page,
    search: searchQuery,
  });

  if (!data) return null;
  const isAdmin = await checkRole('ADMIN');

  const renderRow = (item: Staff) => {
    return (
      <tr
        key={item?.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='flex items-center gap-4 p-4'>
          <ProfileImage
            url={item?.img!}
            name={item?.name}
            bgColor={item?.colorCode!}
            textClassName='text-black'
          />
          <div>
            <h3 className='uppercase'>{item?.name}</h3>
            <span className='text-sm capitalize'>{item?.phone}</span>
          </div>
        </td>
        <td className='hidden md:table-cell'>{item?.role}</td>
        <td className='hidden md:table-cell'>{item?.phone}</td>
        <td className='hidden lg:table-cell'>{item?.email}</td>
        <td className='hidden xl:table-cell'>{format(item?.created_at, 'yyyy-MM-dd')}</td>
        <td>
          <div className='flex items-center gap-2'>
            <ActionDialog type='staff' id={item?.id} data={item} />

            {isAdmin && <ActionDialog type='delete' id={item?.id} deleteType='staff' />}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className='rounded-xl bg-white px-3 py-6 2xl:px-6'>
      <div className='flex items-center justify-between'>
        <div className='hidden items-center gap-1 lg:flex'>
          <Users size={20} className='text-gray-500' />

          <p className='text-2xl font-semibold'>{totalRecords}</p>
          <span className='text-sm text-gray-600 xl:text-base'>total staffs</span>
        </div>
        <div className='flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start'>
          <SearchInput />
          {isAdmin && <StaffForm />}
        </div>
      </div>

      <div className='mt-4'>
        <Table columns={columns} data={data} renderRow={renderRow} />

        {totalPages && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            totalRecords={totalRecords}
            limit={DATA_LIMIT}
          />
        )}
      </div>
    </div>
  );
};

export default StaffList;
