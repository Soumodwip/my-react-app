import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SongDetails from './Pages/SongDetails';
import { songs } from './data';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
  fetch("https://2egbqd7taf.execute-api.ap-south-1.amazonaws.com/default/myReactLambda")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}, []);


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
