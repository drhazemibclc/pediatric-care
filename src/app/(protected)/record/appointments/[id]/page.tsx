import { getAppointmentWithMedicalRecordsById } from '@/utils/services/appointment';
import { AppointmentDetails } from '@/components/appointment/appointment-details';
import AppointmentQuickLinks from '@/components/appointment/appointment-quick-links';
import { BillsContainer } from '@/components/appointment/bills-container';
import ChartContainer from '@/components/appointment/chart-container';
import { DiagnosisContainer } from '@/components/appointment/diagnosis-container';
import { PatientDetailsCard } from '@/components/appointment/patient-details-card';
import { PaymentsContainer } from '@/components/appointment/payment-container';
import { VitalSigns } from '@/components/appointment/vital-signs';
import { MedicalHistoryContainer } from '@/components/medical-history-container';

const AppointmentDetailsPage = async ({
  params,
  searchParams,
}: {
  params: { id: string }; // ✅ Params should not be a Promise
  searchParams: { [key: string]: string | string[] | undefined }; // ✅ Same here
}) => {
  const { id } = params; // ✅ Directly extract id
  const cat = (searchParams?.cat as string) || 'charts';

  const { data } = await getAppointmentWithMedicalRecordsById(Number(id));

  if (!data) {
    return <p>Appointment not found</p>; // ✅ Handle missing data safely
  }

  return (
    <div className='flex min-h-screen w-full flex-col-reverse gap-10 p-6 lg:flex-row'>
      {/* LEFT */}
      <div className='flex w-full flex-col gap-6 lg:w-[65%]'>
        {cat === 'charts' && data.patient_id && <ChartContainer id={data.patient_id} />}
        {cat === 'appointments' && data.id && data.patient_id && (
          <>
            <AppointmentDetails
              id={data.id}
              patient_id={data.patient_id}
              appointment_date={data.appointment_date ?? 'N/A'} // ✅ Use fallback
              time={data.time ?? 'N/A'}
              notes={data.note ?? ''}
            />
            {data.doctor_id && (
              <VitalSigns id={id} patientId={data.patient_id} doctorId={data.doctor_id} />
            )}
          </>
        )}
        {cat === 'diagnosis' && data.patient_id && data.doctor_id && (
          <DiagnosisContainer id={id} patientId={data.patient_id} doctorId={data.doctor_id} />
        )}
        {cat === 'medical-history' && data.patient_id && (
          <MedicalHistoryContainer id={id} patientId={data.patient_id} />
        )}
        {cat === 'billing' && <BillsContainer id={id} />}
        {cat === 'payments' && data.patient_id && <PaymentsContainer patientId={data.patient_id} />}
      </div>
      {/* RIGHT */}
      <div className='flex-1 space-y-6'>
        {data.doctor_id && <AppointmentQuickLinks staffId={data.doctor_id} />}
        {data.patient && <PatientDetailsCard data={data.patient} />}
      </div>
    </div>
  );
};
