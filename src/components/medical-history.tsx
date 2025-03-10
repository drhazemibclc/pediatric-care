import React from 'react';
import { formatDateTime } from '@/utils';
import type { Diagnosis, LabTest, MedicalRecords, Patient } from '@prisma/client';
import { BriefcaseBusiness } from 'lucide-react';
import { ViewAction } from './action-options';
import { MedicalHistoryDialog } from './medical-history-dialog';
import { ProfileImage } from './profile-image';
import { Table } from './tables/table';

export interface ExtendedMedicalHistory extends MedicalRecords {
  patient?: Patient;
  diagnosis: Diagnosis[];
  lab_test: LabTest[];
  index?: number;
}

interface DataProps {
  data: ExtendedMedicalHistory[];
  isShowProfile?: boolean;
}

export const MedicalHistory = ({ data, isShowProfile }: DataProps) => {
  const columns = [
    {
      header: 'No',
      key: 'no',
    },
    {
      className: isShowProfile ? 'table-cell' : 'hidden',
      header: 'Info',
      key: 'name',
    },
    {
      className: '',
      header: 'Date & Time',
      key: 'medical_date',
    },
    {
      className: 'hidden xl:table-cell',
      header: 'Doctor',
      key: 'doctor',
    },
    {
      className: 'hidden md:table-cell',
      header: 'Diagnosis',
      key: 'diagnosis',
    },
    {
      className: 'hidden 2xl:table-cell',
      header: 'Lab Test',
      key: 'lab_test',
    },
  ];

  const renderRow = (item: ExtendedMedicalHistory) => {
    return (
      <tr
        key={item.id}
        className='border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-50'
      >
        <td className='py-2 xl:py-6'># {item?.id}</td>

        {isShowProfile && (
          <td className='flex items-center gap-2 py-2 xl:py-4 2xl:gap-4'>
            <ProfileImage
              url={item.patient?.img ?? '/default-profile.png'}
              name={item?.patient?.first_name + ' ' + item?.patient?.last_name}
            />
            <div>
              <h3 className='font-semibold'>
                {item?.patient?.first_name + ' ' + item?.patient?.last_name}
              </h3>
              <span className='hidden text-xs capitalize md:flex'>
                {item?.patient?.gender.toLowerCase()}
              </span>
            </div>
          </td>
        )}

        <td className=''>{formatDateTime(item?.created_at.toString())}</td>

        <td className='hidden items-center py-2 xl:table-cell'>{item?.doctor_id}</td>
        <td className='hidden lg:table-cell'>
          {item?.diagnosis?.length === 0 ? (
            <span className='text-sm italic text-gray-500'>No diagnosis found</span>
          ) : (
            <>
              <MedicalHistoryDialog
                id={item?.appointment_id}
                patientId={item?.patient_id}
                doctor_id={item?.doctor_id}
                label={
                  <div className='flex items-center gap-x-2 text-lg'>
                    {item?.diagnosis?.length}

                    <span className='text-sm'>Found</span>
                  </div>
                }
              />
            </>
          )}
        </td>
        <td className='hidden 2xl:table-cell'>
          {item?.lab_test?.length === 0 ? (
            <span className='text-sm italic text-gray-500'>No lab test found</span>
          ) : (
            <div className='flex items-center gap-x-2 text-lg'>
              {item?.lab_test?.length}

              <span className='text-sm'>Found</span>
            </div>
          )}
        </td>

        <td>
          <ViewAction href={`/record/appointments/${item?.appointment_id}`} />
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className='rounded-xl bg-white p-2 2xl:p-6'>
        <div className=''>
          <h1 className='text-xl font-semibold'>Medical History (All)</h1>
          <div className='hidden items-center gap-1 lg:flex'>
            <BriefcaseBusiness size={20} className='text-gray-500' />
            <p className='text-2xl font-semibold'>{data?.length}</p>
            <span className='text-sm text-gray-600 xl:text-base'>total records</span>
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={data} />
      </div>
    </>
  );
};
