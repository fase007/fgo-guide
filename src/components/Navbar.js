import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FGO</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/weekrequest">WeekRequest</Link>
        <Link to="/Tierlist" >Tierlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
