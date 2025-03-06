import { calculateBMI } from '@/utils';
import { checkRole } from '@/utils/roles';
import { format } from 'date-fns';
import db from '@/lib/db';
import { AddVitalSigns } from '../dialogs/add-vital-signs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

interface VitalSignsProps {
  id: number | string;
  patientId: string;
  doctorId: string;
  medicalId?: string;
  appointmentId?: string;
}

const ItemCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='w-full'>
      <p className='text-lg font-medium xl:text-xl'>{value}</p>
      <p className='text-sm text-gray-500 xl:text-base'>{label}</p>
    </div>
  );
};
export const VitalSigns = async ({ id, patientId, doctorId }: VitalSignsProps) => {
  const data = await db.medicalRecords.findFirst({
    include: {
      vital_signs: {
        orderBy: { created_at: 'desc' },
      },
    },
    orderBy: { created_at: 'desc' },
    where: { appointment_id: Number(id) },
  });

  const vitals = data?.vital_signs || null;

  const isPatient = await checkRole('PATIENT');

  return (
    <section id='vital-signs'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Vital Signs</CardTitle>

          {!isPatient && (
            <AddVitalSigns
              key={new Date().getTime()}
              patientId={patientId}
              doctorId={doctorId}
              appointmentId={id!.toString()}
              medicalId={data ? data?.id!.toString() : ''}
            />
          )}
        </CardHeader>

        <CardContent className='space-y-4'>
          {vitals?.map((el) => {
            const { bmi, status, colorCode } = calculateBMI(el.weight || 0, el.height || 0);

            return (
              <div className='space-y-4' key={el?.id}>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  <ItemCard label='Body Temperature' value={`${el?.body_temperature}°C`} />
                  <ItemCard
                    label='Blood Pressure'
                    value={`${el?.systolic} / ${el?.diastolic} mmHg`}
                  />
                  <ItemCard label='Heart Rate' value={`${el?.heartRate} bpm`} />
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  <ItemCard label='Weight' value={`${el?.weight} kg`} />
                  <ItemCard label='Height' value={`${el?.height} cm`} />

                  <div className='w-full'>
                    <div className='flex items-center gap-x-2'>
                      <p className='text-lg font-medium xl:text-xl'>{bmi}</p>
                      <span className='text-sm font-medium' style={{ color: colorCode }}>
                        ({status})
                      </span>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  <ItemCard label='Respiratory Rate' value={`${el?.respiratory_rate || 'N/A'}`} />
                  <ItemCard label='Oxygen Saturation' value={`${el?.oxygen_saturation || 'n/a'}`} />
                  <ItemCard
                    label='Reading Date'
                    value={format(el?.created_at, 'MMM d, yyyy hh:mm a')}
                  />
                </div>
                <Separator className='mt-4' />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
