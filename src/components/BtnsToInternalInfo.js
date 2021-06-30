import React from 'react';
import './internalPages.css';

function BtnsToInternalInfo() {
  return (
    <div className="internal__pages">
      <button id="planet" value="overview">
        01 overview
      </button>
      <button id="internal" value="structure">
        02 internal structure
      </button>
      <button id="geology" value="geology">
        03 surface geology
      </button>
    </div>
  );
}

export default BtnsToInternalInfo;
