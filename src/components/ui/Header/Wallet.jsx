import { useState } from 'react';
import { LuWallet } from 'react-icons/lu';
import WalletModal from '../Modal/WalletModal';

const Wallet = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const handleOpenWallet = () => {
    setIsWalletOpen(!isWalletOpen);
  };

  const handleClose = () => {
    setIsWalletOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenWallet}
        className="cursor-pointer text-2xl sm:hidden"
      >
        <LuWallet />
      </button>
      <WalletModal handleClose={handleClose} isWalletOpen={isWalletOpen} />
    </div>
  );
};

export default Wallet;
