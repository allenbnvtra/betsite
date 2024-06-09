'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { mobileNav } from '@/constants';
import MobileModal from '../Modal/MobileModal';
import MobileNotification from '../Modal/MobileNotification';

const MobileNav = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (label) => {
    setOpenModal(label);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const renderSublinks = (label) => {
    const navItem = mobileNav.find((item) => item.label === label);
    return navItem && navItem.sublinks ? (
      <ul>
        {navItem.sublinks.map((sublink, index) => (
          <li key={index}>
            <Link onClick={handleClose} href={sublink.route}>
              <p className="px-4 py-4 text-sm hover:bg-slate-200">
                {sublink.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 border-t-2 bg-white shadow-md md:hidden">
      <nav>
        <div className="flex justify-around py-3 text-slate-800">
          {mobileNav.map(({ label, route, icon, notificationCount }) => (
            <div
              key={label}
              className="relative flex flex-col items-center justify-center"
            >
              {route ? (
                <Link
                  className="flex flex-col items-center justify-center gap-1"
                  href={route}
                >
                  <p className="text-2xl">{icon}</p>
                  <p className="text-xs">{label}</p>
                </Link>
              ) : (
                <div
                  onClick={() => handleOpenModal(label)}
                  className="flex cursor-pointer flex-col items-center justify-center gap-1"
                >
                  <p className="text-2xl">{icon}</p>
                  <p className="text-xs">{label}</p>
                </div>
              )}
              {notificationCount !== undefined && notificationCount > 0 && (
                <span className="absolute right-0 top-[-10px] mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {notificationCount}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>
      <MobileModal
        isOpen={openModal === 'Players'}
        handleClose={handleClose}
        title="Players"
      >
        {renderSublinks('Players')}
      </MobileModal>

      <MobileNotification
        isNotificationOpen={openModal === 'Notification'}
        handleClose={handleClose}
      />

      <MobileModal
        isOpen={openModal === 'Reports'}
        handleClose={handleClose}
        title="Reports"
      >
        {renderSublinks('Reports')}
      </MobileModal>
    </div>
  );
};

export default MobileNav;
