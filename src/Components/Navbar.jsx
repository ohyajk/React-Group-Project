import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../Assets/planet.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="head">
        <img className="logo-nav" src={Planet} alt="logo" />
        <div className="title">
          <span>Space</span>
          <span className="word2">Traveler&apos;s</span>
          <span>Hub</span>
        </div>
      </div>
      <div className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ROCKETS</NavLink>
        <NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>MISSIONS</NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>MY PROFILE</NavLink>
      </div>

    </div>
  );
};

export default Navbar;
