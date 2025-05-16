import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { songs } from '../data';
import AudioPlayer from '../Components/AudioPlayer';

function SongDetails() {
  const { id } = useParams();
  const song = songs.find((song) => song.id === parseInt(id));

  if (!song) {
    return <p className="text-center text-gray-400">Song not found!</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
      <div className="text-white p-8 rounded-xl shadow-lg max-w-lg w-full bg-[#0d2d4b]">
        {/* Back to Home Button */}
        <Link
          to="/home"  // Navigate to /home page after clicking
          className="text-indigo-400 hover:underline mb-4 inline-block font-bold"
        >
          Back to Home
        </Link>

        <div className="text-center mb-6">
          {/* Album Artwork */}
          <div className="mb-6">
            <img
              src={song.albumArtUrl}  // Dynamically set the album art image
              alt={`${song.title} album artwork`}
              className="w-48 h-48 object-cover rounded-lg mx-auto" 
            />
          </div>

          {/* Song Title and Details */}
          <h1 className="text-4xl font-bold text-indigo-400 mb-4">{song.title}</h1>
          <p className="text-xl text-gray-300 mb-2 font-bold">
            <span className="text-gray-400">Artist:</span> {song.artist}
          </p>
          <p className="text-xl text-gray-300 mb-2 font-bold">
            <span className="text-gray-400">Album:</span> {song.album}
          </p>
        </div>

        {/* Audio Player Component */}
        <AudioPlayer
          songs={songs}
          currentSongIndex={songs.findIndex((song) => song.id === parseInt(id))}
          setCurrentSongIndex={() => {}}  // You can modify this if you want to implement song switching
        />
      </div>
    </div>
  );
}

export default SongDetails;
