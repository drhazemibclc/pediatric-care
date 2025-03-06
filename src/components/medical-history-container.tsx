import React from 'react';
import db from '@/lib/db';
import { MedicalHistory } from './medical-history';

interface DataProps {
  id?: number | string;
  patientId: string;
}

export const MedicalHistoryContainer = async ({ patientId }: DataProps) => {
  const data = await db.medicalRecords.findMany({
    include: {
      diagnosis: { include: { doctor: true } },
      lab_test: true,
    },
    orderBy: { created_at: 'desc' },

    where: { patient_id: patientId },
  });
  return (
    <>
      <MedicalHistory data={data} isShowProfile={false} />
    </>
  );
};
