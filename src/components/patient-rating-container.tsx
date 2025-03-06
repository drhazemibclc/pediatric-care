import React from 'react';
import { auth } from '@clerk/nextjs/server';
import db from '@/lib/db';
import { RatingList } from './rating-list';

export const PatientRatingContainer = async ({ id }: { id?: string }) => {
  const { userId } = await auth();

  const data = await db.rating.findMany({
    include: { patient: { select: { first_name: true, last_name: true } } },

    orderBy: { created_at: 'desc' },
    take: 10,
    where: { patient_id: id ? id : userId! },
  });

  if (!data) return null;

  return (
    <div>
      <RatingList data={data} />
    </div>
  );
};
