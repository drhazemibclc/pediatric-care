'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Bell } from 'lucide-react';

export const Navbar = () => {
  const user = useAuth();
  const pathname = usePathname(); // Move usePathname to the component

  const formatPathName = (): string => {
    if (!pathname) return 'Overview';

    const splitRoute = pathname.split('/');
    const lastIndex = splitRoute.length - 1 > 2 ? 2 : splitRoute.length - 1;

    const pathName = splitRoute[lastIndex];

    const formattedPath = pathName.replace(/-/g, ' ');

    return formattedPath;
  };

  const path = formatPathName();

  return (
    <div className='flex justify-between bg-white p-5'>
      <h1 className='text-xl font-medium capitalize text-gray-500'>{path || 'Overview'}</h1>

      <div className='flex items-center gap-4'>
        <div className='relative'>
          <Bell />
          <p className='absolute -top-3 right-1 size-4 rounded-full bg-red-600 text-center text-[10px] text-white'>
            2
          </p>
        </div>

        {user?.userId && <UserButton />}
      </div>
    </div>
  );
};
