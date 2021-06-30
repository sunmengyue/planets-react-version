import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar({ planets }) {
  return (
    <div className="header">
      <h1>THE PLANETS</h1>
      <div className="nav">
        {planets.map((planet, i) => {
          return (
            <Link to={`/${planet}`} className="nav__item" key={i}>
              {planet}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
