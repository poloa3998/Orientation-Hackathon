import React from 'react';
import MostPlayed from './MostPlayed';
import NowPlaying from './NowPlaying';
import SongList from './SongList';

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="flex flex-col h-full py-6 space-y-8 ">
      <SongList />
      <div>
        <NowPlaying />
        <MostPlayed />
      </div>
    </div>
  );
};

export default Feed;
