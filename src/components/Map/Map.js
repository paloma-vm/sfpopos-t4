// src/components/Map/Map.js
import React from 'react';
import './Map.css';
// import { Link } from 'react-router-dom';

function Map() {
  return (
    <div className='POPOSDetails-map'>
      <img src={process.env.PUBLIC_URL + '/map-placeholder.png'} alt='map placeholder'/>
    </div>
  )
}

export default Map