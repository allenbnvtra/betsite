import { mobileNav } from '@/constants';
import Link from 'next/link';
import React from 'react';

const MobileNav = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 border-t-2 bg-white shadow-md md:hidden">
      <nav>
        <div className="flex justify-around py-3 text-slate-800">
          {mobileNav.map(
            ({ label, route, icon, sublinks, notificationCount }) => (
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
                  <div className="flex flex-col items-center justify-center gap-1">
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
            ),
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
