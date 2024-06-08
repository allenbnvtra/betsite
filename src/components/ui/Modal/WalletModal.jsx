import { walletBalance } from '@/constants';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const WalletModal = ({ isWalletOpen, handleClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isWalletOpen) {
      setVisible(true);
      document.body.classList.add('overflow-hidden'); // Disable background scroll
    } else {
      setTimeout(() => setVisible(false), 300);
      document.body.classList.remove('overflow-hidden'); // Enable background scroll
    }
  }, [isWalletOpen]);

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleOuterClick}
      className={`fixed inset-0 z-[1000] flex cursor-default items-end justify-center bg-black bg-opacity-30 duration-300 ${
        isWalletOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {visible && (
        <div
          className={`z-[1000] w-full transform rounded-tl-2xl rounded-tr-2xl bg-white pt-1 text-slate-700 transition-transform duration-300 ${
            isWalletOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between border-b px-4 py-4">
            <p className="text-meduim font-semibold">Wallet Balance</p>
            <IoIosClose
              className="cursor-pointer text-3xl"
              onClick={handleClose}
            />
          </div>

          <div className="flex flex-col gap-10 px-5 py-3 text-slate-900">
            {walletBalance.map(({ label, amount }) => (
              <div className="flex w-full items-center" key={label}>
                <p className="w-1/2 text-slate-500">{label}</p>
                <p className="w-1/2">{amount}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletModal;
