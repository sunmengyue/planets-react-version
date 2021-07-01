import React from 'react';
import BtnsToInternalInfo from './BtnsToInternalInfo';
import './MainInfo.css';

function MainInfo({ planet }) {
  return (
    <div className="main__info">
      <h1 id="planet__name">Mercury</h1>
      <p id="overview">
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </p>
      <p>
        <span>Source:</span>
        <a id="wiki" href="https://en.wikipedia.org/wiki/Mercury">
          Wikipedia →
        </a>
      </p>
      <BtnsToInternalInfo />
    </div>
  );
}

export default MainInfo;
