import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  TransactionSignature,
} from '@solana/web3.js';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const MostPlayed = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [albumInfo, setAlbumInfo] = useState<any>();
  const [songs, setSongs] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '451db8352cmsh67b08e26357b728p1e3e2ajsn2c667dd3d476',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };
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
  useEffect(() => {
    const res = fetch(
      'https://spotify23.p.rapidapi.com/albums/?ids=0zjbNtfnMLmt2q50E3wDx8',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAlbumInfo(response.albums[0]);
        setSongs(response.albums[0].tracks.items);
      })
      .catch((err) => console.error(err));
  }, []);
  const milliToMin = (time: number) => {
    const date = new Date(time);
    return `${date.getMinutes()}:${date.getSeconds()}`;
  };
  return (
    <div>
      <div className="space-y-5">
        {songs?.slice(0, 4).map((song: any) => {
          return (
            <div className="flex items-center space-x-5 dark:bg-[rgb(30,30,30)] border border-solid dark:border-zinc-700 max-w-sm rounded-md py-2 px-5">
              <Image src={albumInfo?.images[2].url} height="64" width="64" />
              <div className="flex space-x-5 text-sm items-center">
                <p>{song.name}</p>
                <p>{song.artists[0].name}</p>
                <p>{milliToMin(song.duration_ms)}</p>
                <button onClick={onClick} disabled={!publicKey}>
                  <AiOutlineHeart className="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPlayed;
