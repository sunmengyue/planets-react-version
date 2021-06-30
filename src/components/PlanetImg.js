import React from 'react';
import './Planet.css';

function PlanetImg(props) {
  return (
    <div className="planet">
      <img src={props.img} alt="planet" />
    </div>
  );
}

export default PlanetImg;
