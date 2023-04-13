// src/components/Map/Map.js
import React from 'react';
import './Map.css';
import { Link } from 'react-router-dom';

function Map(props) {
  const {name, image, address, hours, id} = props
  console.log(name)
  return (
    <div className='Map'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="Hello"
        />
      </Link>
      <h1>
        <Link
          className='Map-title'
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='Map-info'>
        <div>{address}</div>
        <div className='hours'>{hours}</div>
      </div>
    </div>
  )
}


export default Map