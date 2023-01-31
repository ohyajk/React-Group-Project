import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { rocketsData } from './Redux/Rockets/Rockets';
import './App.css';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketsData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
