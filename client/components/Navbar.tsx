import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');
type Props = {};

const Navbar = (props: Props) => {
  const { publicKey } = useWallet();
  return (
    <nav className="flex space-x-5">
      <div className="dark:bg-[rgb(30,30,30)] border border-solid dark:border-zinc-700 max-w-sm rounded-md py-2 px-5">
        <input className="bg-transparent  w-full" placeholder="Arists, songs" />
      </div>
      <WalletMultiButton />
    </nav>
  );
};

export default Navbar;
