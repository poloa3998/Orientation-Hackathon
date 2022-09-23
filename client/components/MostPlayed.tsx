import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  TransactionSignature,
} from '@solana/web3.js';
import React, { useCallback } from 'react';

type Props = {};

const MostPlayed = (props: Props) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const onClick = useCallback(async () => {
    if (!publicKey) {
      console.log({ type: 'error', message: `Wallet not connected!` });
      console.log('error', `Send Transaction: Wallet not connected!`);
      return;
    }

    let signature: TransactionSignature = '';
    try {
      // some random dest
      const destAddress = Keypair.generate().publicKey;
      const amount = 1 * LAMPORTS_PER_SOL;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: destAddress,
          lamports: amount,
        })
      );

      signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'confirmed');
      console.log({
        type: 'success',
        message: 'Transaction successful!',
        txid: signature,
      });
    } catch (error: any) {
      console.log({
        type: 'error',
        message: `Transaction failed!`,
        description: error?.message,
        txid: signature,
      });
      console.log('error', `Transaction failed! ${error?.message}`, signature);
      return;
    }
  }, [publicKey, connection, sendTransaction]);
  return (
    <div>
      <button onClick={onClick} disabled={!publicKey} className="bg-blue-500">
        Testing
      </button>
    </div>
  );
};

export default MostPlayed;
