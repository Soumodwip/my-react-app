// src/components/SongCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function SongCard({ song }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105 border-2 border-indigo-500 relative flex flex-col md:flex-row items-start justify-between">
      
      {/* Song Title and Details */}
      <div className="flex flex-col md:flex-1 mb-4 md:mb-0">
        <div className="text-cyan-400 text-2xl font-semibold mb-2">{song.title}</div>
        <div className="text-gray-300 text-xl mb-2">{song.artist}</div>
        <p className="text-gray-300 mb-3"><span className="font-bold text-white">Album:</span> {song.album}</p>
        
        {/* More Details Link */}
        <Link
          to={`/song/${song.id}`}
          className="text-indigo-400 hover:underline mt-2 inline-block text-lg font-medium"
        >
          More Details
        </Link>
      </div>
      
      {/* Image */}
      <div className="w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden shadow-lg border-4 border-indigo-400 ml-4 mt-4 md:mt-0">
        <img src={song.albumArtUrl} alt={song.title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default SongCard;
