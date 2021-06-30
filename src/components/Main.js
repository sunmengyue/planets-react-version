import React from 'react';
import PlanetImg from './PlanetImg';

import MainInfo from './MainInfo';
import './Main.css';

function Main({ planet }) {
  return (
    <div className="main">
      <div className="planet">
        <PlanetImg img={`/assets/planet-${planet}.svg`} />
      </div>
      <MainInfo />
    </div>
  );
}

export default Main;
