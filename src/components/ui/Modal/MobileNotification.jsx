import { IoIosClose } from 'react-icons/io';
import React, { useEffect, useState } from 'react';

const MobileNotification = ({ isNotificationOpen, handleClose }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isNotificationOpen) {
      setVisible(true);
      document.body.classList.add('overflow-hidden');
    } else {
      setTimeout(() => setVisible(false), 300);
      document.body.classList.remove('overflow-hidden');
    }
  }, [isNotificationOpen]);

  console.log(visible);

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleOuterClick}
      className={`fixed inset-0 z-[1000] flex cursor-default items-end justify-center bg-black bg-opacity-30 duration-300 ${
        isNotificationOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {visible && (
        <div
          className={`z-[1000] h-[30rem] w-full transform rounded-tl-2xl rounded-tr-2xl bg-white pt-1 text-sm text-slate-700 transition-transform duration-300 ${
            isNotificationOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <p className="font-semibold">Notification</p>
            <IoIosClose
              className="cursor-pointer text-2xl"
              onClick={handleClose}
            />
          </div>

          <div className="flex h-[90%] items-center justify-center">
            <h1>No Notification found</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNotification;
