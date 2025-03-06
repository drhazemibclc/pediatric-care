import type { SearchParamsProps } from '@/types';
import { DATA_LIMIT } from '@/utils/seetings';
import { getMedicalRecords } from '@/utils/services/medical-record';
import type { Diagnosis, Gender, LabTest, MedicalRecords, Patient } from '@prisma/client';
import { format } from 'date-fns';
import { BriefcaseBusiness } from 'lucide-react';
import { ViewAction } from '@/components/action-options';
import { Pagination } from '@/components/pagination';
import { ProfileImage } from '@/components/profile-image';
import SearchInput from '@/components/search-input';
import { Table } from '@/components/tables/table';

const columns = [
  {
    header: 'No',
    key: 'no',
  },
  {
    header: 'Info',
    key: 'name',
  },
  {
    className: 'hidden md:table-cell',
    header: 'Date & Time',
    key: 'medical_date',
  },
  {
    className: 'hidden 2xl:table-cell',
    header: 'Doctor',
    key: 'doctor',
  },
  {
    className: 'hidden lg:table-cell',
    header: 'Diagnosis',
    key: 'diagnosis',
  },
  {
    className: 'hidden 2xl:table-cell',
    header: 'Lab Test',
    key: 'lab_test',
  },
  {
    className: '',
    header: 'Action',
    key: 'action',
  },
];

interface PatientDataFromApi {
  img: string | null;
  colorCode: string | null;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: Gender;
}

interface ExtendedProps extends Omit<MedicalRecords, 'patient'> {
  patient: PatientDataFromApi;
  diagnosis: Diagnosis[];
  lab_test: LabTest[];
}

const MedicalRecordsPage = async (props: SearchParamsProps) => {
  const searchParams = await props.searchParams;
  const page = (searchParams?.p || '1') as string;
  const searchQuery = (searchParams?.q || '') as string;

  const { data, totalPages, totalRecords, currentPage } = await getMedicalRecords({
    page,
    search: searchQuery,
  });

  //const isAdmin = await checkRole("ADMIN");

  if (!data) return null;

  const renderRow = (item: ExtendedProps) => {
    const name = item?.patient?.first_name + ' ' + item?.patient?.last_name;
    const patient = item?.patient;

    return (
      <tr
        key={item?.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='flex items-center gap-4 p-4'>
          <ProfileImage
            url={patient?.img ?? '/default-profile.png'}
            name={name}
            bgColor={patient?.colorCode ?? ''}
            textClassName='text-black'
          />
          <div>
            <h3 className='uppercase'>{name}</h3>
            <span className='text-sm capitalize'>{patient?.gender}</span>
          </div>
        </td>
        <td className='hidden md:table-cell'>{format(item?.created_at, 'yyyy-MM-dd HH:mm:ss')}</td>
        <td className='hidden 2xl:table-cell'>{item?.doctor_id}</td>
        <td className='hidden lg:table-cell'>
          {item?.diagnosis?.length === 0 ? (
            <span className='italic text-gray-400'>No diagnosis found</span>
          ) : (
            <span>{item?.diagnosis.length}</span>
          )}
        </td>
        <td className='hidden xl:table-cell'>
          {item?.lab_test?.length === 0 ? (
            <span className='italic text-gray-400'>No lab found</span>
          ) : (
            <span>{item?.lab_test.length}</span>
          )}
        </td>

        <td>
          <ViewAction href={`/appointments/${item?.appointment_id}`} />
        </td>
      </tr>
    );
  };

  return (
    <div className='rounded-xl bg-white px-3 py-6 2xl:px-6'>
      <div className='flex items-center justify-between'>
        <div className='hidden items-center gap-1 lg:flex'>
          <BriefcaseBusiness size={20} className='text-gray-500' />

          <p className='text-2xl font-semibold'>{totalRecords}</p>
          <span className='text-sm text-gray-600 xl:text-base'>total records</span>
        </div>
        <div className='flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start'>
          <SearchInput />
        </div>
      </div>

      <div className='mt-4'>
        <Table columns={columns} data={data} renderRow={renderRow} />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          totalRecords={totalRecords}
          limit={DATA_LIMIT}
        />
      </div>
    </div>
  );
};

export default MedicalRecordsPage;
