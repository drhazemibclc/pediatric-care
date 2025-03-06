import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const SettingsQuickLinks = () => {
  return (
    <Card className='w-full rounded-xl bg-white shadow-none'>
      <CardHeader>
        <CardTitle className='text-lg text-gray-500'>Quick Links</CardTitle>
      </CardHeader>

      <CardContent className='flex flex-wrap gap-4 text-sm font-normal'>
        <Link href='?cat=services' className='rounded-lg bg-gray-100 px-4 py-2 text-gray-600'>
          Services
        </Link>
        <Link
          href='?cat=appointment'
          className='rounded-lg bg-violet-100 px-4 py-2 text-violet-600'
        >
          Payment Methods
        </Link>

        <Link
          href='?cat=medical-history'
          className='rounded-lg bg-rose-100 px-4 py-2 text-rose-600'
        >
          Medical History
        </Link>
      </CardContent>
    </Card>
  );
};
