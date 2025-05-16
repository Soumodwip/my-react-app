import React, { useEffect, useState } from "react";
import { songs } from "../data";
import SongList from "../Components/SongList";
import SearchBar from "../Components/SearchBar";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve the user's first name from localStorage
    const firstName = localStorage.getItem("userName");
    if (firstName) {
      setUserName(firstName);
    }
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500">
      {/* Header with each letter of "Musify" styled differently */}
      <h1 className="text-7xl mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-500 font-extrabold tracking-widest">
          M
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600 font-extrabold tracking-widest">
          u
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600 font-extrabold tracking-widest">
          s
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-semibold tracking-widest">
          i
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold tracking-widest">
          f
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-extrabold tracking-widest">
          y
        </span>
      </h1>

      {/* Welcome message with animation */}
      {userName && (
        <div className="flex justify-center items-center mt-6 overflow-hidden mb-4">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 animate-marquee shadow-lg">
            Welcome, {userName}!
          </h2>
        </div>
      )}

      {/* "Be the music!! Live in music!!" in a single line */}
      <p className="text-center text-gray-100 mb-8 text-lg">
        <b className="italic text-xl">Be the music!! Live in music!!</b>
      </p>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Song List */}
      <div className="mt-10">
        <SongList songs={filteredSongs} />
      </div>

      {/* Vibrant Button for Navigation */}
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:rotate-6"
        >
          Explore More Music
        </a>
      </div>

      {/* Footer with Contact Information and Copyright */}
      <footer className="bg-gray-800 text-white py-10 mt-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Person 1 */}
            <div>
              <h4 className="font-semibold text-xl mb-2">Soumadwip Sharma</h4>
              <p>Phone: +91 8240400685</p>
              <p>Email: sarmasoumyadip@gmail.com</p>
              <div className="mt-2">
                <a
                  href="https://www.facebook.com/share/W3sN1STpBV9smzZY/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <span className="mx-2">|</span>
                <a
                  href="https://www.linkedin.com/in/soumadwip-sharma-2a68b12aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span className="mx-2">|</span>
                <a
                  href="https://x.com/BloodySoumo003?t=T5LG1eebtxaNy4paWtZ7QA&s=08"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
            </div>

            {/* Person 2 */}
            <div>
              <h4 className="font-semibold text-xl mb-2">Soumyadip Saha</h4>
              <p>Phone: +91 7439301818</p>
              <p>Email: soumyadipsaha262@gmail.com</p>
              <div className="mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100084193721516&mibextid=ZbWKwL"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                
                
              </div>
            </div>

            {/* Person 3 */}
            <div>
              <h4 className="font-semibold text-xl mb-2">Tuneer Halder</h4>
              <p>Phone: +91 9123925065</p>
              <p>Email: tuneerhalder@gmail.com</p>
              <div className="mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100084193721516&mibextid=ZbWKwL"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                
                
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-10 text-sm text-gray-400">
            <p>&copy; 2024 Musify. All Rights Reserved.</p>
            <p>Privacy Policy | Terms of Service | Cookie Policy</p>
          </div>
        </div>
      </footer>

      {/* Inline Style for Keyframes Animation */}
      <style jsx="true">
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            animation: marquee 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
