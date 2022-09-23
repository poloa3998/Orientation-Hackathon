import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const SongList = () => {
  const [songs, setSongs] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '451db8352cmsh67b08e26357b728p1e3e2ajsn2c667dd3d476',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };
  useEffect(() => {
    const res = fetch(
      'https://spotify23.p.rapidapi.com/search/?q=pop&%3CREQUIRED%3E&type=albums&offset=0&limit=5&numberOfTopResults=5',
      options
    )
      .then((response) => response.json())
      .then((response) => setSongs(response.albums.items))
      .catch((err) => console.error(err));
  }, []);
  console.log(songs);
  return (
    <div className="flex flex-col h-1/2 w-full">
      <h2 className=" text-3xl">Top Artists</h2>
      <div className="flex h-1/2 w-full space-x-5">
        {songs.map((song: any) => {
          return (
            <div key={song.data.uri}>
              <Image
                key={song.data.uri}
                src={song.data.coverArt.sources[2].url}
                height="640"
                width="640"
                className=" rounded-lg"
              />
              <p>{song.data.name}</p>
              <p>{song.data.artists.items[0].profile.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongList;
