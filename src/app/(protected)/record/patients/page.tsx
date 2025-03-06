import type { SearchParamsProps } from '@/types';
import { calculateAge } from '@/utils';
import { checkRole } from '@/utils/roles';
import { DATA_LIMIT } from '@/utils/seetings';
import { getAllPatients } from '@/utils/services/patient';
import type { Patient } from '@prisma/client';
import { format } from 'date-fns';
import { UserPen, Users } from 'lucide-react';
import { ActionDialog } from '@/components/action-dialog';
import { ActionOptions, ViewAction } from '@/components/action-options';
import { Pagination } from '@/components/pagination';
import { ProfileImage } from '@/components/profile-image';
import SearchInput from '@/components/search-input';
import { Table } from '@/components/tables/table';
import { Button } from '@/components/ui/button';

const columns = [
  {
    header: 'Patient Name',
    key: 'name',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Gender',
    key: 'gender',
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
    header: 'Address',
    key: 'address',
  },
  {
    className: 'hidden lg:table-cell',
    header: 'Last Visit',
    key: 'created_at',
  },
  {
    className: 'hidden 2xl:table-cell',
    header: 'Last Treatment',
    key: 'treatment',
  },
  {
    header: 'Actions',
    key: 'action',
  },
];

interface PatientProps extends Patient {
  appointments: {
    medical: {
      created_at: Date;
      treatment_plan: string;
    }[];
  }[];
}
const PatientList = async (props: SearchParamsProps) => {
  const searchParams = await props.searchParams;
  const page = (searchParams?.p || '1') as string;
  const searchQuery = (searchParams?.q || '') as string;

  const { data, totalPages, totalRecords, currentPage } = await getAllPatients({
    page,
    search: searchQuery,
  });
  const isAdmin = await checkRole('ADMIN');

  if (!data) return null;

  const renderRow = (item: PatientProps) => {
    const lastVisit = item?.appointments[0]?.medical[0] || null;

    const name = item?.first_name + ' ' + item?.last_name;

    return (
      <tr
        key={item?.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='flex items-center gap-4 p-4'>
          <ProfileImage
            url={item?.img!}
            name={name}
            bgColor={item?.colorCode!}
            textClassName='text-black'
          />
          <div>
            <h3 className='uppercase'>{name}</h3>
            <span className='text-sm capitalize'>{calculateAge(item?.date_of_birth)}</span>
          </div>
        </td>
        <td className='hidden md:table-cell'>{item?.gender}</td>
        <td className='hidden md:table-cell'>{item?.phone}</td>
        <td className='hidden lg:table-cell'>{item?.email}</td>
        <td className='hidden xl:table-cell'>{item?.address}</td>
        <td className='hidden xl:table-cell'>
          {lastVisit ? (
            format(lastVisit?.created_at, 'yyyy-MM-dd HH:mm:ss')
          ) : (
            <span className='italic text-gray-400'>No last visit</span>
          )}
        </td>
        <td className='hidden xl:table-cell'>
          {lastVisit ? (
            lastVisit?.treatment_plan
          ) : (
            <span className='italic text-gray-400'>No last treatment</span>
          )}
        </td>
        <td>
          <div className='flex items-center gap-2'>
            <ViewAction href={`/patient/${item?.id}`} />

            <ActionOptions>
              <div className='space-y-3'>
                <Button variant={'ghost'} className='text-xs font-light'>
                  <UserPen size={16} />
                  Edit
                </Button>

                {isAdmin && <ActionDialog type='delete' id={item.id} deleteType='patient' />}
              </div>
            </ActionOptions>
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
          <span className='text-sm text-gray-600 xl:text-base'>total patients</span>
        </div>
        <div className='flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start'>
          <SearchInput />
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

export default PatientList;
