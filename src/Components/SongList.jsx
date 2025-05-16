// src/components/SongList.js
import React from 'react';
import SongCard from './SongCard';

function SongList({ songs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
