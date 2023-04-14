// src/components/Map/Map.js
import React from 'react';
import './Map.css';
// import { Link } from 'react-router-dom';

function Map() {
  return (
    <img src='../../../public/map-placeholder.png'
            srcset="image-small.jpg 480w,
                    image-medium.jpg 768w,
                    image-large.jpg 1200w"
      alt="Responsive map placeholder image"
    >
    </img>
  )
}

export default Map