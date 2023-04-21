// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
// import RandomSpace from '../RandomSpace/RandomSpace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

icon({name: 'user', family: 'classic', style: 'solid'})

function Header() {
  return (
    <header className="Header">
      <div className='Header-left'> {/* make this <nav> */}
        <h1>SFPOPOS</h1>
        <div className="Header-Subheader">San Francisco Privately Owned Public Open Spaces</div>

      </div>
      <div className='Header-right a'> 
        <div className='mobile-nav'>
          <NavLink
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">
            <FontAwesomeIcon icon={icon({name: 'coffee'})} />
            {/* <img src={process.env.PUBLIC_URL + '/home.png'} className="list-img" alt="home icon" width="40px" height="40px"></img> */}
          </NavLink>
        </div>

        <div className='desk-nav'>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/">Spaces</NavLink>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/about">About</NavLink>
        </div>
        {/* <RandomSpace className='RandomSpace'/> */}
      </div>
    </header>
  )
}

export default Header