import React from 'react';
import { Link } from 'react-router-dom';
import Planet from '../Assets/planet.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="head">
        <img className="logo" src={Planet} alt="logo" />
        <div className="title">
          <span>Space</span>
          <span className="word2">Traveler&apos;s</span>
          <span>Hub</span>
        </div>
      </div>
      <div className="nav">
        <Link to="/">ROCKETS</Link>
        <Link to="/missions">MISSIONS</Link>
        <Link to="/profile">MY PROFILE</Link>
      </div>

    </div>
  );
};

export default Navbar;
