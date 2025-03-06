import React from 'react';
import { clerkClient } from '@clerk/nextjs/server';
import { format } from 'date-fns';
import { BriefcaseBusiness } from 'lucide-react';
import { Table } from '@/components/tables/table';

const columns = [
  {
    className: 'hidden lg:table-cell',
    header: 'user ID',
    key: 'id',
  },
  {
    header: 'Name',
    key: 'name',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Email',
    key: 'email',
  },
  {
    header: 'Role',
    key: 'role',
  },
  {
    header: 'Status',
    key: 'status',
  },
  {
    className: 'hidden xl:table-cell',
    header: 'Last Login',
    key: 'last_login',
  },
];

interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  emailAddresses: { emailAddress: string }[];
  publicMetadata: { role: string };
  lastSignInAt: number | string;
}
const UserPage = async () => {
  const client = await clerkClient();

  const { data, totalCount } = await client.users.getUserList({
    orderBy: '-created_at',
  });

  if (!data) return null;

  const renderRow = (item: UserProps) => {
    return (
      <tr
        key={item.id}
        className='border-b border-gray-200 text-base even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='hidden items-center lg:table-cell'>{item?.id}</td>
        <td className='table-cell py-2 xl:py-4'>
          {item?.firstName} {item?.lastName}
        </td>
        <td className='table-cell'>{item?.emailAddresses[0].emailAddress}</td>
        <td className='table-cell capitalize'>{item?.publicMetadata.role}</td>
        <td className='hidden capitalize md:table-cell'>Active</td>
        <td className='hidden capitalize md:table-cell'>
          {format(item?.lastSignInAt, 'yyyy-MM-dd h:mm:ss')}
        </td>
      </tr>
    );
  };
  return (
    <div className='rounded-xl bg-white p-2 md:p-4 2xl:p-6'>
      <div className='flex items-center justify-between'>
        <div className='hidden items-center gap-1 lg:flex'>
          <BriefcaseBusiness size={20} className='text-gray-500' />

          <p className='text-2xl font-semibold'>{totalCount}</p>
          <span className='text-sm text-gray-600 xl:text-base'>total users</span>
        </div>
      </div>

      <div>
        <Table columns={columns} data={data} renderRow={renderRow} />
      </div>
    </div>
  );
};

export default UserPage;
