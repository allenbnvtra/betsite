'use client';
import React, { useState } from 'react';
import { mobileNav } from '@/constants';
import Link from 'next/link';
import MobileNotification from '../Modal/MobileNotification';
import MobilePlayer from '../Modal/MobilePlayer';
import MobileReport from '../Modal/MobileReport';

const MobileNav = () => {
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleOpenModal = (label) => {
    if (label === 'Players') {
      setIsPlayerModalOpen(true);
    } else if (label === 'Notification') {
      setIsNotificationModalOpen(true);
    } else if (label === 'Reports') {
      setIsReportModalOpen(true);
    }
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
      {isNotificationModalOpen && (
        <MobileNotification
          handleClose={() => setIsNotificationModalOpen(false)}
          isNotificationOpen={isNotificationModalOpen}
        />
      )}
      {isPlayerModalOpen && (
        <MobilePlayer
          handleClose={() => setIsPlayerModalOpen(false)}
          isPlayerOpen={isPlayerModalOpen}
        />
      )}
      {isReportModalOpen && (
        <MobileReport
          handleClose={() => setIsReportModalOpen(false)}
          isReportOpen={isReportModalOpen}
        />
      )}
    </div>
  );
};

export default MobileNav;
