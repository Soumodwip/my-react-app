// src/components/AudioPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AudioPlayer({ songs, currentSongIndex, setCurrentSongIndex }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const song = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    navigate(`/song/${songs[nextIndex].id}`);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    navigate(`/song/${songs[prevIndex].id}`);
  };

  return (
    <div className="text-center mt-6">
      <style>
        {`
          /* Simple spin animation */
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Apply spin when playing */
          .animate-spin {
            animation: spin 2s linear infinite;
          }
        `}
      </style>

      {/* Disk with rotating icon in the center */}
      <div className="relative mx-auto mb-6 w-40 h-40 rounded-full bg-gray-900 border-4 border-indigo-500 flex items-center justify-center">
        {/* Center icon that rotates */}
        <div
          className={`w-8 h-8 bg-indigo-400 text-white rounded-full flex items-center justify-center 
            ${isPlaying ? 'animate-spin' : ''}`}
        >
          ♫
        </div>
      </div>

      {/* Audio player */}
      <audio ref={audioRef} src={song.trackUrl} controls className="w-full mb-4" />

      {/* Controls */}
      <div className="flex justify-between mx-6">
        <button 
          onClick={prevSong} 
          className="p-3 bg-black text-white rounded-full hover:bg-gray-700 font-bold transition duration-300"
        >
          Previous
        </button>
        <button 
          onClick={togglePlayPause} 
          className="p-3 bg-black text-white rounded-full hover:bg-gray-700 font-bold transition duration-300"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          onClick={nextSong} 
          className="p-3 bg-black text-white rounded-full hover:bg-gray-700 font-bold transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
