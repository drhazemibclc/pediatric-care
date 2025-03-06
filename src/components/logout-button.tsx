'use client';

import React from 'react';
import { useClerk } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

export const LogoutButton = () => {
  const { signOut } = useClerk();
  return (
    <Button
      variant={'outline'}
      className='bottom-0 w-fit gap-2 px-0 md:px-4'
      onClick={() => {
        return signOut({ redirectUrl: '/sign-in' });
      }}
    >
      <LogOut />
      <span className='hidden lg:block'>Logout</span>
    </Button>
  );
};
