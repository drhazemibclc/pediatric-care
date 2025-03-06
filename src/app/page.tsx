import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const { userId, sessionClaims } = await auth();

  // Safely access role from session claims
  const role = sessionClaims?.metadata?.role?.toLowerCase() || 'patient';

  if (userId && role) {
    redirect(`/${role}`);
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center p-6'>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='mb-8'>
          <h1 className='text-center text-4xl font-bold md:text-5xl'>
            Welcome to <br />
            <span className='text-5xl text-blue-700 md:text-6xl'>SMART CLINIC</span>
          </h1>
        </div>

        <div className='flex max-w-xl flex-col items-center justify-center text-center'>
          <p className='mb-8'>
            Your trusted partner in pediatric care. Schedule appointments, monitor growth, and
            access medical records with ease.
          </p>

          <div className='flex gap-4'>
            {userId ? (
              <>
                <Link href={`/${role}`}>
                  <Button>View Dashboard</Button>
                </Link>
                {/* <UserButton /> */}
              </>
            ) : (
              <>
                <Link href='/sign-up'>
                  <Button className='font-light md:text-base'>New Patient</Button>
                </Link>

                <Link href='/sign-in'>
                  <Button variant='outline' className='hover:text-nlue-600 underline md:text-base'>
                    Login to account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className='mt-8'>
        <p className='text-center text-sm'>
          &copy; 2024 Health Factory Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
