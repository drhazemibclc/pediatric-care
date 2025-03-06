import React from 'react';
import Link from 'next/link';
import { getRole } from '@/utils/roles';
import {
  Bell,
  LayoutDashboard,
  List,
  ListOrdered,
  Logs,
  Pill,
  Receipt,
  Settings,
  SquareActivity,
  User,
  UserRound,
  Users,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LogoutButton } from './logout-button';

const ACCESS_LEVELS_ALL = ['admin', 'doctor', 'nurse', 'lab technician', 'patient'];

const SidebarIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  return <Icon className='size-6 lg:size-5' />;
};

export const Sidebar = async () => {
  const role = await getRole();

  const SIDEBAR_LINKS = [
    {
      label: 'MENU',
      links: [
        {
          access: ACCESS_LEVELS_ALL,
          href: '/',
          icon: LayoutDashboard,
          name: 'Dashboard',
        },
        {
          access: ['patient'],
          href: '/patient/self',
          icon: User,
          name: 'Profile',
        },
      ],
    },
    {
      label: 'Manage',
      links: [
        {
          access: ['admin'],
          href: '/record/users',
          icon: Users,
          name: 'Users',
        },
        {
          access: ['admin'],
          href: '/record/doctors',
          icon: User,
          name: 'Doctors',
        },
        {
          access: ['admin', 'doctor'],
          href: '/record/staffs',
          icon: UserRound,
          name: 'Staffs',
        },
        {
          access: ['admin', 'doctor', 'nurse'],
          href: '/record/patients',
          icon: UsersRound,
          name: 'Patients',
        },
        {
          access: ['admin', 'doctor', 'nurse'],
          href: '/record/appointments',
          icon: ListOrdered,
          name: 'Appointments',
        },
        {
          access: ['admin', 'doctor', 'nurse'],
          href: '/record/medical-records',
          icon: SquareActivity,
          name: 'Medical Records',
        },
        {
          access: ['admin', 'doctor'],
          href: '/record/billing',
          icon: Receipt,
          name: 'Billing Overview',
        },
        {
          access: ['nurse'],
          href: '/nurse/patient-management',
          icon: Users,
          name: 'Patient Management',
        },
        {
          access: ['admin', 'doctor', 'nurse'],
          href: '/nurse/administer-medications',
          icon: Pill,
          name: 'Administer Medications',
        },
        {
          access: ['patient'],
          href: '/record/appointments',
          icon: ListOrdered,
          name: 'Appointments',
        },
        {
          access: ['patient'],
          href: '/patient/self',
          icon: List,
          name: 'Records',
        },
        {
          access: ['patient'],
          href: '#',
          icon: Pill,
          name: 'Prescription',
        },
        {
          access: ['patient'],
          href: '/patient/self?cat=payments',
          icon: Receipt,
          name: 'Billing',
        },
      ],
    },
    {
      label: 'System',
      links: [
        {
          access: ACCESS_LEVELS_ALL,
          href: '/notifications',
          icon: Bell,
          name: 'Notifications',
        },
        {
          access: ['admin'],
          href: '/admin/audit-logs',
          icon: Logs,
          name: 'Audit Logs',
        },
        {
          access: ['admin'],
          href: '/admin/system-settings',
          icon: Settings,
          name: 'Settings',
        },
      ],
    },
  ];

  return (
    <div className='flex min-h-full w-full flex-col justify-between gap-4 overflow-y-scroll bg-white p-4'>
      <div className=''>
        <div className='flex items-center justify-center gap-2 lg:justify-start'>
          <div className='rounded-md bg-blue-600 p-1.5 text-white'>
            <SquareActivity size={22} />
          </div>
          <Link href={'/'} className='hidden text-base font-bold lg:flex 2xl:text-xl'>
            Kinda HMS
          </Link>
        </div>

        <div className='mt-4 text-sm'>
          {SIDEBAR_LINKS.map((el) => {
            return (
              <div key={el.label} className='flex flex-col gap-2'>
                <span className='my-4 hidden font-bold uppercase text-gray-400 lg:block'>
                  {el.label}
                </span>

                {el.links.map((link) => {
                  if (link.access.includes(role.toLowerCase())) {
                    return (
                      <Link
                        href={link.href}
                        className='flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 hover:bg-blue-600/10 md:px-2 lg:justify-start'
                        key={link.name}
                      >
                        <SidebarIcon icon={link.icon} />
                        <span className='hidden lg:block'>{link.name}</span>
                      </Link>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>

      <LogoutButton />
    </div>
  );
};
