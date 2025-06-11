import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SongDetails from './Pages/SongDetails';
import { songs } from './data';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
<<<<<<< HEAD


=======
>>>>>>> cef73d1b4aab4e5d262a6c6249e691af7061eaaa
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Protected Home Page */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Song Details Page */}
        <Route path="/song/:id" element={<SongDetails songs={songs} />} />
      </Routes>
    </Router>
  );
}

export default App;
