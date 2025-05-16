// src/components/SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for songs..."
      className="w-full p-3 text-gray-800 border-2 border-indigo-400 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-300 mb-6"
    />
  );
}

export default SearchBar;
