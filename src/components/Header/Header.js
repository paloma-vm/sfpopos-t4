// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Header() {
  return (
    <div className="Header">
      <header>
        <div className='Header-left'>
          <h1>SFPOPOS</h1>
          <div className="Header-Subheader">San Francisco Privately Owned Public Open Spaces</div>
        </div>
        <div className='Header-right'>
          <div className='a'>
          <NavLink 
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/">List</NavLink>
          <NavLink 
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/about">About</NavLink>
          <RandomSpace className='RandomSpace'/>
          </div>
        </div>

      </header>
    </div>
  )
}

export default Header