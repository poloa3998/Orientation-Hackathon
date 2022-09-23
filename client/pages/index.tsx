import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import SongPlayer from '../components/SongPlayer';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Solanify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-5/6 flex items-start space-x-12">
        <Sidebar />
        <div className="w-full h-full py-5 flex flex-col">
          <Navbar />
          <Feed />
        </div>
      </div>

      <SongPlayer />
    </div>
  );
};

export default Home;
