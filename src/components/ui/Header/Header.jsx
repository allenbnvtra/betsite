'use client';

import { useState } from 'react';
import { IoMailSharp } from 'react-icons/io5';
import { BiTransferAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import AddPlayerModal from '../Modal/AddPlayerModal';
import TransferPoints from '../Modal/TransferPoints';
import NotificationDropdown from './NotificationDropdown';
import Image from 'next/image';
import Link from 'next/link';
import Wallet from './Wallet';

const Header = () => {
  const [isAddPersonModalOpen, setIsAddPersonModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleAddPersonModal = () =>
    setIsAddPersonModalOpen(!isAddPersonModalOpen);
  const toggleTransferModal = () =>
    setIsTransferModalOpen(!isTransferModalOpen);
  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsUserDropdownOpen(false);
  };
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  const notificationCount = 5;

  return (
    <header className="sticky top-0 z-[1000] bg-[#1c3153]">
      <div className="flex w-full items-center justify-between px-4 py-3 text-white sm:p-4">
        <h1 className="hidden text-xl font-semibold sm:block">Dashboard</h1>
        <Link className="sm:hidden" href="/overview">
          <Image src="/images/king.png" height={42} width={42} alt="" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-5 text-2xl sm:flex">
            <MdOutlinePersonAddAlt
              className="cursor-pointer"
              onClick={toggleAddPersonModal}
            />
            <BiTransferAlt
              className="cursor-pointer"
              onClick={toggleTransferModal}
            />
            <IoMailSharp className="cursor-pointer" />
            <div className="relative">
              <IoMdNotificationsOutline
                className="cursor-pointer"
                onClick={toggleNotificationDropdown}
              />
              {notificationCount > 0 && (
                <div className="absolute right-[-5px] top-[-3px] flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {notificationCount}
                </div>
              )}
              {isNotificationDropdownOpen && <NotificationDropdown />}
            </div>
          </div>

          <div
            className="relative flex cursor-pointer items-center gap-5 rounded-full bg-[#24487ea3] px-2 py-1 shadow-md transition-all hover:bg-[#375480a3]"
            onClick={toggleUserDropdown}
          >
            <div className="flex items-center gap-1">
              <IoPersonCircleSharp className="text-2xl" />
              <p className="text-xs">allenbnvtra</p>
            </div>
            <MdOutlineKeyboardArrowDown />
            {isUserDropdownOpen && (
              <div className="absolute right-2 top-0 mt-10 w-48 rounded bg-white text-black shadow-lg">
                <p className="p-2">Profile</p>
                <p className="p-2">Logout</p>
              </div>
            )}
          </div>

          <Wallet />
        </div>
      </div>

      {/* Add Person Modal */}
      {isAddPersonModalOpen && <AddPlayerModal />}

      {/* Transfer Modal */}
      {isTransferModalOpen && <TransferPoints />}
    </header>
  );
};

export default Header;
