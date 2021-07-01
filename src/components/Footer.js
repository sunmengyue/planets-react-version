import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="data">
        <h4>rotation time</h4>
        <h2 id="rotation">58.6 Days</h2>
      </div>
      <div className="data">
        <h4>revolution time</h4>
        <h2 id="revolution">87.97 Days</h2>
      </div>
      <div className="data">
        <h4>radius</h4>
        <h2 id="radius">2,439.7 KM</h2>
      </div>
      <div className="data">
        <h4>Average temp</h4>
        <h2 id="temp">430 °C</h2>
      </div>
    </div>
  );
}

export default Footer;
