import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
require('@solana/wallet-adapter-react-ui/styles.css');
type Props = {};

const Navbar = (props: Props) => {
  const { publicKey } = useWallet();
  return (
    <nav className="flex space-x-10">
      <div className="flex items-center space-x-3 dark:bg-[rgb(30,30,30)] border border-solid dark:border-zinc-700 w-1/3 rounded-md py-2 px-5">
        <BsSearch />
        <input className="bg-transparent w-full" placeholder="Arists, songs" />
      </div>
      <WalletMultiButton />
    </nav>
  );
};

export default Navbar;
